{ self, inputs, ... }:
let
  user = "ueda";
  specialArgs = { inherit self inputs; };
  system = "aarch64-darwin";
  name = "silver";
in
{
  flake.darwinConfigurations.${name} = inputs.nix-darwin.lib.darwinSystem {
    inherit specialArgs;
    modules = [
      self.darwinModules.common
      ({ pkgs, ... }: {
        # keep-sorted start block=yes
        home-manager = {
          extraSpecialArgs = specialArgs;
          users.${user} = {
            imports = [ ./users/ueda.nix ];
            home.stateVersion = "26.05";
          };
        };
        networking = {
          computerName = name;
          localHostName = name;
          hostName = name;
        };
        nixpkgs.hostPlatform = system;
        programs.bash.enable = true;
        system = {
          primaryUser = user;
          stateVersion = 7;
        };
        users = {
          knownUsers = [ user ];
          users.${user} = {
            uid = 501;
            home = "/Users/${user}";
            shell = pkgs.bash;
          };
        };
        # keep-sorted end
      })
    ];
  };
}
