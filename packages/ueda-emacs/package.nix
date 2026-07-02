{
  emacs31,
  fetchgit,
  lib,
  inputs,
}:
let
  version = "31.1";
  majorVersion = lib.versions.major version;
in
emacs31.overrideAttrs (oldAttrs: {
  inherit version;

  src = fetchgit {
    url = "https://https.git.savannah.gnu.org/git/emacs.git";
    rev = "398a8c7a6e318ad74dec379263a644b7f1708b5f";
    hash = "sha256-rhfxd3F93Ys1+1KMv9/rEldn60jgBiKnB4VD9AISPSA=";
  };
  patches =
    (oldAttrs.patches or [ ])
    ++ map (name: "${inputs.homebrew-emacs-plus}/patches/emacs-${majorVersion}/${name}") [
      "fix-ns-x-colors.patch"
      "round-undecorated-frame.patch"
      "system-appearance.patch"
    ]
    ++
      map (name: "${inputs.homebrew-emacs-plus}/community/patches/${name}/emacs-${majorVersion}.patch")
        [
          "mac-font-use-typo-metrics"
          "frame-transparency"
        ];

})
