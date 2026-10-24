{ ... }: {
  perSystem = { config, ... }: {
    config.codegen = {
      enable = true;
      root = ../..;
      files =
        let
          inherit (config.ueda.scope) ueda-cdktf-providers;
        in
        {
          "packages/ueda-cdktf-providers/gen".source = "${ueda-cdktf-providers.gen}/providers/";
        };
    };
  };
}
