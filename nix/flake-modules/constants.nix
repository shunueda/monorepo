{ lib, ... }: {
  options.constants = lib.mkOption {
    type = lib.types.lazyAttrsOf lib.types.anything;
    default = { };
    description = "Arbitrary shared constants (cache URLs, keys, etc.) used across the configuration.";
  };
  config.constants.ueda = {
    nix-cache = {
      substituter = "https://nix-cache.shunueda.org";
      publicKey = "ueda-1:xcYAg6UiIbY9K4HF7rHiPeukhgfxW4dOdNHn/1Jd6p0=";
    };
  };
}
