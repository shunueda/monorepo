{
  writeShellApplication,
  hut,
  gnutar,
  emacs,
  runCommand,
  writableTmpDirAsHomeHook,
}:
let
  publish = writeShellApplication {
    name = "ueda-org-publish";
    runtimeInputs = [
      gnutar
      hut
    ];
    text = ''
      hut pages publish -d ueda.srht.site ${final}
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

        tar -cvzf $out -C build .
      '';

in
final
