{ self, inputs, ... }:
let
  user = "me";
  specialArgs = { inherit self inputs; };
  system = "aarch64-darwin";
in
{
  flake.darwinConfigurations.anterior = inputs.nix-darwin.lib.darwinSystem {
    inherit specialArgs;
    modules = [
      self.darwinModules.common
      self.darwinModules.linux-builder
      ({ pkgs, ... }: {
        nixpkgs.hostPlatform = system;
        programs.bash.enable = true;
        users = {
          knownUsers = [ user ];
          users.${user} = {
            uid = 501;
            home = "/Users/${user}";
            shell = pkgs.bash;
          };
        };
        system = {
          primaryUser = user;
          stateVersion = 6;
        };
        environment.systemPackages = [
          self.packages.${system}.ensure-jupyter-no-output
          inputs.nocommit.packages.${system}.default
        ];
        home-manager = {
          extraSpecialArgs = specialArgs;
          users.${user} = {
            imports = [ ./users/me.nix ];
            home.stateVersion = "26.05";
          };
        };
      })
    ];
  };
}
