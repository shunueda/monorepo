{
  inputs,
  self,
  lib,
}:

lib.composeManyExtensions [
  (
    final: prev:
    let
      inherit (final.stdenv.hostPlatform) system;

      pkgs-unstable = import inputs.nixpkgs-unstable {
        inherit system;
        config.allowUnfree = true;
      };
    in
    {
      # Custom packages
      inherit (self.packages.${system}) displaymode ueda-tools;

      inherit (pkgs-unstable)
        # Backport from unstable
        homerow
        prismlauncher
        emacsPackagesFor
        ;

      emacs = pkgs-unstable.emacs31.overrideAttrs (prev: {
        patches = prev.patchs or [ ] ++ [
          ../patches/emacs-31/round-undecorated-frame.patch
        ];
      });
    }
  )
  inputs.emacs-overlay.overlays.package
  inputs.dune2nix.overlays.dune
]
