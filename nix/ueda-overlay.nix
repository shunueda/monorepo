{
  inputs,
  self,
  lib,
}:

lib.composeManyExtensions [
  (
    final: prev:
    let
      inherit (final.stdenv.hostPlatform) system isDarwin;

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

      emacs = pkgs-unstable.emacs31.overrideAttrs (old: {
        patches =
          old.patches or [ ]
          ++ lib.optionals isDarwin [
            ../patches/emacs-31/fix-ns-x-colors.patch
            ../patches/emacs-31/round-undecorated-frame.patch
          ];
      });
    }
  )
  inputs.emacs-overlay.overlays.package
  inputs.dune2nix.overlays.dune
]
