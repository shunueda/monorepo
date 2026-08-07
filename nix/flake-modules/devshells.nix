{ ... }: {
  perSystem =
    {
      pkgs,
      lib,
      config,
      ...
    }:
    let
      uedaScope = config.ueda.scope;
    in
    {
      devshells.default = {
        packages =
          with pkgs;
          with uedaScope;
          [
            # keep-sorted start
            awscli2
            nixd
            nodejs
            python3
            terraform
            typescript-language-server
            # keep-sorted end
          ];
        env = lib.optionals pkgs.stdenv.isDarwin [
          {
            name = "SDKROOT";
            value = pkgs.apple-sdk_26;
          }
        ];
      };
    };
}
