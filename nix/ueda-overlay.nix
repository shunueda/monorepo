{ inputs, self }:

final: prev:
let
  inherit (final.stdenv.hostPlatform) system;
in
{
  # Custom packages
  inherit (self.packages.${system})
    ns
    homerow
    displaymode
    ueda-emacs
    ;

  # Backport from unstable
  inherit (inputs.nixpkgs-unstable.legacyPackages.${system}) ;
}
