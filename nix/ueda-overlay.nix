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
  inherit (self.packages.${system}) displaymode ueda-tools;

  inherit (pkgs-unstable)
    # Backport from unstable
    homerow
    emacsPackagesFor
    ;

  emacs = pkgs-unstable.emacs31;
}
