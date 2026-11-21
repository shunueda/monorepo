{
  config,
  self,
  inputs,
  pkgs,
  ...
}:
let
  user = "ueda";
  specialArgs = { inherit self inputs; };
  system = "aarch64-linux";
  name = "patina";
in
{
  flake.nixosConfigurations.${name} = inputs.nixpkgs.lib.nixosSystem {
    inherit specialArgs;
    modules = [
      ./hardware-configuration.nix
      self.nixosModules.common
      inputs.nixos-apple-silicon.nixosModules.default
      ({ pkgs, ... }: {
        # keep-sorted start block=yes
        boot = {
          loader.systemd-boot.enable = true;
          loader.efi.canTouchEfiVariables = false;
          kernelParams = [ "appledrm.show_notch=1" ];
          extraModprobeConfig = ''
            options hid_apple iso_layout=0
          '';
        };
        environment.systemPackages = [ pkgs.river ];
        hardware.asahi = {
          enable = true;
          avd.enable = false;
        };
        home-manager = {
          extraSpecialArgs = specialArgs;
          users.${user} = {
            imports = [ ./users/ueda.nix ];
          };
        };
        networking = {
          hostName = name;
          networkmanager = {
            enable = true;
            wifi.backend = "iwd";
          };
        };
        nixpkgs.hostPlatform = system;
        services = {
          displayManager = {
            sddm = {
              enable = true;
              wayland.enable = true;
            };
            sessionPackages = [ pkgs.river ];
          };
          libinput.enable = true;
        };
        system.stateVersion = "26.05";
        users.users.${user} = {
          extraGroups = [
            "wheel"
            "networkmanager"
            "input"
          ];
          isNormalUser = true;
          openssh.authorizedKeys.keyFiles = [ config.constants.ueda.keys.ssh ];
        };
        # keep-sorted end
      })
    ];
  };

}
