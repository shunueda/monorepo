{ inputs, ... }: {
  perSystem = { system, lib, ... }: {
    _module.args = {
      pkgs = import inputs.nixpkgs {
        inherit system;
        config.allowUnfree = true;
        overlays = [ (import ../ueda-overlay.nix { inherit inputs; }) ];
      };
    };

    checks = lib.pipe inputs.self.darwinConfigurations [
      (lib.filterAttrs (_: { config, ... }: config.nixpkgs.hostPlatform.system == system))
      (lib.mapAttrs' (
        k:
        { config, ... }:
        lib.nameValuePair "build-darwin-configurations-${k}" config.system.build.toplevel
      ))
    ];
  };
}
