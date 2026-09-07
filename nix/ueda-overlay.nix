{
  inputs,
  self,
  lib,
}:

let
  my =
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
        ;

      emacs = pkgs-unstable.emacs31;
    };
in
lib.composeManyExtensions [
  my
  inputs.nur.overlays.default
  inputs.emacs-overlay.overlays.package
]
