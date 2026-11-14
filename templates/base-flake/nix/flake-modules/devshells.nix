{
  perSystem = { pkgs, ... }: {
    devshells.default = {
      packages = with pkgs; [ nixd ];
    };
  };
}
