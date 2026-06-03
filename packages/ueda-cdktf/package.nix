{
  package-lock2nix,
  cdktf-cli,
  terraform,
  writeShellApplication,
  lib,
}:
let
  uedaCdktf = package-lock2nix.mkNpmModule { src = ./.; };
in
writeShellApplication {
  name = "ueda-cdktf";
  runtimeEnv = {
    CDKTF_APP = lib.getExe uedaCdktf;
  };
  runtimeInputs = [
    cdktf-cli
    terraform
  ];
  text = ''
    cdktf "$@"
  '';
}
