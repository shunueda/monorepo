{
  config,
  self,
  inputs,
  ...
}:
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
        boot.loader.grub = {
          enable = true;
          efiSupport = true;
          efiInstallAsRemovable = true;
        };
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
        services = {
          openssh = {
            enable = true;
            settings = {
              PasswordAuthentication = false;
            };
          };
          avahi = {
            enable = true;
            ipv4 = true;
            nssmdns4 = true;
            publish = {
              enable = true;
              addresses = true;
              workstation = true;
            };
          };
          logind = {
            settings = {
              Login = {
                HandleLidSwitch = "ignore";
              };
            };
          };
        };
        system.stateVersion = "26.05";
        users.users.${user} = {
          extraGroups = [
            "wheel"
            "networkmanager"
          ];
          isNormalUser = true;
          openssh.authorizedKeys.keyFiles = [ config.constants.ueda.keys.ssh ];
        };
        # keep-sorted end
      })
    ];
  };
}
