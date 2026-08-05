{ lib, ... }: {
  options.constants = lib.mkOption {
    type = lib.types.lazyAttrsOf lib.types.anything;
    default = { };
  };

  config.constants.ueda = {
    nix-cache = {
      substituter = "https://nix-cache.shunueda.org";
      publicKey = "ueda-1:xcYAg6UiIbY9K4HF7rHiPeukhgfxW4dOdNHn/1Jd6p0=";
    };
    keys =
      let
        fingerprint = "C879B61CBD7C81A8783AD90965A3009821043C2C";
      in
      {
        inherit fingerprint;
        gpg = builtins.readFile ../../keys/${fingerprint}.asc;
        ssh = builtins.readFile ../../keys/${fingerprint}.pub;
      };
  };
}
