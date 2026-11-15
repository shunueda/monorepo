{ inputs, config, ... }: {
  flake.nixosModules.common = { self, lib, ... }: {
    imports = [
      inputs.home-manager.nixosModules.default
      inputs.disko.nixosModules.default
    ];
    nix = {
      settings = {
        allow-import-from-derivation = false;
        use-xdg-base-directories = true;
        experimental-features = [
          "nix-command"
          "flakes"
        ];
        substituters = [
          "https://nix-cache.oyasai.io"
          "https://anterior-public.cachix.org"
          "https://nix-community.cachix.org"
          "https://cache.numtide.com"
          config.constants.ueda.nix-cache.substituter
        ];
        trusted-public-keys = [
          "oyasaiserver:f0coAsRP8jLzDTOmVCY8hqQibMHtZcxjk60oVCQkjtU="
          "anterior-public.cachix.org-1:uLNXTMrqtMCiIJ4lYu47MGrbVPpyploI6J2y5Yre9es="
          "nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs="
          "niks3.numtide.com-1:DTx8wZduET09hRmMtKdQDxNNthLQETkc/yaX7M4qK0g="
          config.constants.ueda.nix-cache.publicKey
        ];
      };
      gc.automatic = true;
    };
    nixpkgs = {
      config.allowUnfree = true;
      overlays = [ (import ../../nix/ueda-overlay.nix { inherit inputs self lib; }) ];
    };
    home-manager = {
      useGlobalPkgs = true;
      useUserPackages = true;
    };
    services.keyd = {
      enable = true;
      keyboards.default = {
        ids = [ "*" ];
        settings.main.capslock = "leftcontrol";
      };
    };
  };
}
