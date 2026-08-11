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

  inherit (pkgs-unstable)
    # Backport from unstable
    emacs31
    homerow
    # Broken on 26.05
    mailutils
    ;
}
