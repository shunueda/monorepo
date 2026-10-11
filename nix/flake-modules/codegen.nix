{ ... }: {
  perSystem = { config, ... }: {
    config.codegen = {
      enable = true;
      root = ../..;
      files =
        let
          inherit (config.ueda.scope) ueda-cdktf-providers ueda-llm;
        in
        {
          "packages/ueda-cdktf-providers/gen".source = "${ueda-cdktf-providers.gen}/providers/";
          "packages/ueda-llm/gen".source = "${ueda-llm.gen}/";
        };
    };
  };
}
