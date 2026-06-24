{ inputs, stdenv }:
let
  inherit (stdenv.hostPlatform) system;
in
inputs.emacs-overlay.packages.${system}.emacs-unstable.overrideAttrs (old: {
  patches =
    (old.patches or [ ])
    ++ map (name: "${inputs.emacs-plus}/patches/emacs-31/${name}") [
      "fix-ns-x-colors.patch"
      "round-undecorated-frame.patch"
      "system-appearance.patch"
    ];
})
