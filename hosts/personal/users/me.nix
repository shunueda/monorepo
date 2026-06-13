{ self, ... }: {
  imports = [ self.homeModules.common ];

  programs = {
    prismlauncher.enable = true;
  };
}
