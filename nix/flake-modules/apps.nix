{ self, inputs, ... }: {
  perSystem =
    {
      pkgs,
      lib,
      system,
      ...
    }:
    {
      apps =
        lib.mapAttrs'
          (
            name:
            { config, ... }:
            lib.nameValuePair "darwin-${name}-activate" {
              type = "app";
              program = lib.getExe (
                pkgs.writeShellApplication {
                  name = "darwin-${name}-active";
                  text = ''
                    nix \
                      --extra-experimental-features "nix-command flakes" \
                      run "path:${inputs.nix-darwin.outPath}" -- \
                      switch \
                      --flake "${self.outPath}#${name}" \
                      --option extra-substituters "${lib.join " " config.nix.settings.substituters}" \
                      --option extra-trusted-public-keys "${lib.join " " config.nix.settings.trusted-public-keys}"
                  '';
                }
              );
            }
          )
          (
            lib.filterAttrs (
              _: { config, ... }: config.nixpkgs.hostPlatform.system == system
            ) self.darwinConfigurations
          );
    };
}
