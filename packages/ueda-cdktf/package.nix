{
  package-lock2nix,
  terraform,
  writeShellApplication,
  ueda-cdktf-providers,
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
    ueda-cdktf-providers
    terraform
  ];
  text = ''
    cdktf "$@"
  '';
}
