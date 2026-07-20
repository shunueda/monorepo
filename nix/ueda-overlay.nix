{ inputs, self }:

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

  # Backport from unstable
  inherit (pkgs-unstable) emacs31 homerow;
}
