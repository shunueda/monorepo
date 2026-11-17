{
  inputs,
  self,
  lib,
}:

lib.composeManyExtensions [
  (
    final: prev:
    let
      inherit (prev.stdenv.hostPlatform) system isDarwin;

      pkgs-unstable = import inputs.nixpkgs-unstable {
        inherit system;
        config.allowUnfree = true;
      };
    in
    {
      # Custom packages
      inherit (self.packages.${system}) displaymode;

      inherit (pkgs-unstable)
        # Backport from unstable
        prismlauncher
        emacsPackagesFor
        ;

      emacs =
        if isDarwin then
          pkgs-unstable.emacs31.overrideAttrs (old: {
            patches =
              old.patches or [ ]
              ++ lib.optionals isDarwin [
                ../patches/emacs-31/fix-ns-x-colors.patch
                ../patches/emacs-31/round-undecorated-frame.patch
              ];
          })
        else
          pkgs-unstable.emacs31-pgtk;

      niri-stable = inputs.niri-flake.packages.${system}.niri-stable.overrideAttrs (old: {
        postPatch = (old.postPatch or "") + ''
          substituteInPlace src/ui/mru.rs \
            --replace-fail \
              "Color32F::new(0., 0., 0., 0.8)" \
              "Color32F::new(0., 0., 0., 0.0)" \
           --replace-fail \
              "if let Some(texture) = panel_texture {" \
              "if let Some(texture) = panel_texture.filter(|_| false) {"
        '';
      });
    }
  )
  inputs.emacs-overlay.overlays.package
  inputs.dune2nix.overlays.dune
]
