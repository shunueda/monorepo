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
      inherit (self.packages.${system}) displaymode;

      inherit (pkgs-unstable)
        # Backport from unstable
        homerow
        prismlauncher
        emacsPackagesFor
        ;

      emacs = pkgs-unstable.emacs31;

      ghq = pkgs-unstable.ghq.overrideAttrs (old: {
        patches = old.patches or [ ] ++ [ ../patches/ghq/get-dry-run.patch ];
      });
    }
  )
  inputs.emacs-overlay.overlays.package
  inputs.dune2nix.overlays.dune
]
