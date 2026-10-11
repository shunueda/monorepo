{
  writeShellApplication,
  lib,
  pass,
}:
{
  name,
  secrets,
  main,
  passthru ? {}
}:
let
  # Project agnostic.
  passWrapper =
    {
      name,
      secrets,
      main,
      passthru ? {}
    }:
    writeShellApplication {
      inherit name passthru;
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
  inherit name main passthru;
  secrets = lib.listToAttrs (map (secret: lib.nameValuePair secret "ApiKeys/${secret}") secrets);
}
