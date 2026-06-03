{ ... }:
{
  perSystem =
    { pkgs, config, ... }:
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
            terraform
            # keep-sorted end
          ];
      };
    };
}
