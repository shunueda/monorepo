{
  symlinkJoin,
  writeShellApplication,
  moreutils,
  fzf,
  gh,
  fd,
}:
symlinkJoin {
  name = "ueda-tools";
  paths = [
    (writeShellApplication {
      name = "histsync";
      runtimeInputs = [ moreutils ];
      text = builtins.readFile ./scripts/histsync.sh;
    })

    (writeShellApplication {
      name = "gh-token-refresh";
      runtimeInputs = [ gh ];
      text = builtins.readFile ./scripts/gh-token-refresh.sh;
    })
  ];
}
