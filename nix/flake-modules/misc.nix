{ inputs, self, ... }: {
  perSystem =
    {
      system,
      lib,
      pkgs,
      ...
    }:
    {
      _module.args = {
        pkgs = import inputs.nixpkgs {
          inherit system;
          config.allowUnfree = true;
          overlays = [ (import ../ueda-overlay.nix { inherit inputs self lib; }) ];
        };
      };

      checks = {
        build-configurations = pkgs.linkFarm "build-configurations" (
          lib.mapAttrsToList
            (name: { config, ... }: {
              inherit name;
              path = config.system.build.toplevel;
            })
            (
              lib.filterAttrs (_: { config, ... }: config.nixpkgs.hostPlatform.system == system) (
                self.darwinConfigurations // self.nixosConfigurations
              )
            )
        );
      };
    };
}
