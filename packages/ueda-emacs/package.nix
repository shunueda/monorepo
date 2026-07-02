{
  inputs,
  stdenv,
}:
let
  inherit (stdenv.hostPlatform) system;

  # TODO: use `unstable` when 31.1 lands
  emacs = inputs.emacs-overlay.packages.${system}.emacs-git;

  # TODO: use lib.splitVersion to make this more solid. `emacs-git` uses date.
  version = "31";
in
emacs.overrideAttrs (old: {
  patches =
    (old.patches or [ ])
    ++ map (name: "${inputs.homebrew-emacs-plus}/patches/emacs-${version}/${name}") [
      "fix-ns-x-colors.patch"
      "round-undecorated-frame.patch"
      "system-appearance.patch"
    ]
    ++ map (name: "${inputs.homebrew-emacs-plus}/community/patches/${name}/emacs-${version}.patch") [
      "mac-font-use-typo-metrics"
      "frame-transparency"
    ];
})
