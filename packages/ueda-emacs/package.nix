{ inputs, stdenv }:
let
  inherit (stdenv.hostPlatform) system;
  base = inputs.emacs-overlay.packages.${system}.emacs-unstable;
in
base
