{
  package-lock2nix,
  writeShellApplication,
  uedaPassWrapper,
  runCommand,
  yq,
  inputs,
  lib,
}:
uedaPassWrapper {
  name = "ueda-llm";

  secrets = [
    # keep-sorted start
    "OPENROUTER_API_KEY"
    "PLAID_CLIENT_ID"
    "PLAID_CLIENT_SECRET"
    "PLAID_TOKENS"
    # keep-sorted end
  ];

  main = package-lock2nix.mkNpmModule { src = ./.; };

  passthru.gen = runCommand "ueda-llm-gen" { nativeBuildInputs = [ yq ]; } ''
      mkdir -p $out
      <${inputs.plaid-openapi}/*.yml yq >$out/plaid-openapi.json
    '';
}
