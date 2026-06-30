{
  writeShellApplication,
  lib,
  pass,
}:
{
  name,
  secrets,
  main,
}:
let
  # Project agnostic.
  passWrapper =
    {
      name,
      secrets,
      main,
    }:
    writeShellApplication {
      inherit name;
      runtimeInputs = [ pass ];
      text = ''
        ${lib.concatMapAttrsStringSep "\n" (k: v: ''
          ${k}="$(pass show ${v})"
          export ${k}
        '') secrets}

        ${lib.getExe main} "$@"
      '';
    };
in
# My opinionated take.
passWrapper {
  inherit name main;
  secrets = lib.listToAttrs (map (secret: lib.nameValuePair secret "ApiKeys/${secret}") secrets);
}
