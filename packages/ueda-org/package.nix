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
  publish = writeShellApplication {
    name = "ueda-org-publish";
    runtimeInputs = [ hut ];
    text =
      let
        domains = [
          "shunueda.org"
          "ueda.srht.site"
        ];
      in
      ''
        <<<"$SRHT_TOKEN" hut init

        ${lib.concatMapStringsSep "\n" (domain: "hut pages publish --domain ${domain} ${final}") domains}
      '';
  };

  final =
    runCommand "ueda-org"
      {
        nativeBuildInputs = [
          emacs
          gnutar
          writableTmpDirAsHomeHook
        ];

        passthru = { inherit publish; };
      }
      ''
        emacs --batch --script ${./build.el} ${./src} build

        cp ${./src/style.css} build/style.css

        tar -cvzf $out -C build .
      '';

in
final
