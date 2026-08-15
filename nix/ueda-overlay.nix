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
    homerow
    # Broken on 26.05
    mailutils
    ;

  emacs = pkgs-unstable.emacs31.overrideAttrs (prev: {
    patches = prev.patches or [ ] ++ [ ../patches/emacs-31/round-undecorated-frame.patch ];
  });
}
