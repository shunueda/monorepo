{ self, inputs, ... }:
let
  user = "ueda";
  specialArgs = { inherit self inputs; };
  system = "x86_64-linux";
  name = "black";
in
{
  flake.nixosConfigurations.${name} = inputs.nixpkgs.lib.nixosSystem {
    inherit specialArgs;
    modules = [
      ./hardware-configuration.nix
      self.diskoConfigurations.single-disk-ext4
      self.nixosModules.common
      ({ ... }: {
        # keep-sorted start block=yes
        disko.devices.disk.main.device = "/dev/disk/by-id/nvme-SAMSUNG_MZVLB512HBJQ-000L2_S4DYNF0MA06699";
        home-manager = {
          extraSpecialArgs = specialArgs;
          users.${user} = {
            imports = [ ./users/ueda.nix ];
            home.stateVersion = "26.05";
          };
        };
        networking = {
          hostName = name;
          networkmanager.enable = true;
        };
        nixpkgs.hostPlatform = system;
        system.stateVersion = "26.05";
        users.users.${user} = {
          extraGroups = [
            "wheel"
            "networkmanager"
          ];
          isNormalUser = true;
          openssh.authorizedKeys.keyFiles = [ ../../keys/C879B61CBD7C81A8783AD90965A3009821043C2C.pub ];
        };
        # keep-sorted end
      })
    ];
  };
}
