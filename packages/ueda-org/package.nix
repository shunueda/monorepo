{
  writeShellApplication,
  hut,
  gnutar,
  emacs,
  runCommand,
  writableTmpDirAsHomeHook,
  lib,
}:
let
  domains = [
    "shunueda.org"
    "ueda.srht.site"
  ];

  publish = writeShellApplication {
    name = "ueda-org-publish";
    runtimeInputs = [ hut ];
    text =
      ''
        <<<"$SRHT_TOKEN" hut init

        ${lib.concatMapStringsSep "\n" (domain: "hut pages publish --domain ${domain} ${final}") domains}
      '';
  };

  final =
    runCommand "ueda-org"
      {
        nativeBuildInputs = [
          (emacs.pkgs.withPackages (epkgs: with epkgs; [ htmlize org-static-blog ]))
          gnutar
          writableTmpDirAsHomeHook
        ];

        passthru = { inherit publish; };
      }
      ''
        mkdir -p build/drafts

        emacs --batch --script ${./build.el} ${./src} build ${builtins.head domains}

        cp -r ${./src}/style.css ${./src}/assets build

        tar -cvzf $out -C build .
      '';

in
final
