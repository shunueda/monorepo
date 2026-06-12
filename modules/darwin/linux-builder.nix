{ ... }: {
  flake.darwinModules.linux-builder = { lib, ... }: {
    nix = {
      linux-builder = {
        enable = true;
        ephemeral = true;
        systems = lib.platforms.linux;
        config = {
          boot.binfmt.emulatedSystems = [ "x86_64-linux" ];
          virtualization = {
            cores = 6;
            memorySize = 12 * 1000;
            diskSize = 100 * 1000;
          };
        };
        maxJobs = 12;
      };
      settings.trusted-users = [ "@admin" ];
    };
  };
}
