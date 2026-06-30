{
  package-lock2nix,
  terraform,
  writeShellApplication,
  ueda-cdktf-providers,
  lib,
  uedaPassWrapper,
}:
let
  uedaCdktf = package-lock2nix.mkNpmModule { src = ./.; };
in
uedaPassWrapper {
  name = "ueda-cdktf";

  secrets = [
    # keep-sorted start
    "CLOUDFLARE_ACCESS_KEY_ID"
    "CLOUDFLARE_SECRET_ACCESS_KEY"
    "GITHUB_TOKEN"
    "NIX_CACHE_SIGNING_KEY"
    "SRHT_TOKEN"
    "TF_TOKEN_app_terraform_io"
    # keep-sorted end
  ];

  main = writeShellApplication {
    name = "ueda-cdktf-main";
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
  };
}
