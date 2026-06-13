{ inputs, ... }: {
  flake.darwinModules.common = { self, pkgs, ... }: {
    imports = [ inputs.home-manager.darwinModules.home-manager ];
    nix = {
      settings = {
        allow-import-from-derivation = false;
        experimental-features = [
          "nix-command"
          "flakes"
        ];
        sandbox = "relaxed";
        substituters = [
          "https://nix-cache.oyasai.io"
          "https://anterior-public.cachix.org"
        ];
        trusted-public-keys = [
          "oyasaiserver:f0coAsRP8jLzDTOmVCY8hqQibMHtZcxjk60oVCQkjtU="
          "anterior-public.cachix.org-1:uLNXTMrqtMCiIJ4lYu47MGrbVPpyploI6J2y5Yre9es="
        ];
      };
      gc.automatic = true;
    };
    nixpkgs = {
      config.allowUnfree = true;
      overlays = [
        inputs.nur.overlays.default
        (
          final: prev:
          let
            inherit (final.stdenv.hostPlatform) system;
          in
          {
            # My custom packages
            inherit (self.packages.${system}) ns homerow displaymode;
          }
        )
      ];
    };
    home-manager = {
      useGlobalPkgs = true;
      useUserPackages = true;
    };
    environment.shells = with pkgs; [ bash ];
    system = {
      startup.chime = false;
      defaults = {
        LaunchServices.LSQuarantine = false;
        NSGlobalDomain = {
          KeyRepeat = 1;
          InitialKeyRepeat = 15;
        };
        WindowManager.StandardHideWidgets = true;
        dock = {
          show-recents = false;
          autohide = true;
          orientation = "bottom";
          tilesize = 32;
          static-only = true;
          autohide-delay = 0.5;
          autohide-time-modifier = 0.5;
        };
        CustomUserPreferences = {
          "com.apple.HIToolbox" = {
            AppleFnUsageType = 1;
            AppleEnabledInputSources = [
              {
                InputSourceKind = "Keyboard Layout";
                "KeyboardLayout ID" = 0;
                "KeyboardLayout Name" = "U.S.";
              }
              {
                "Bundle ID" = "com.apple.inputmethod.Kotoeri.RomajiTyping";
                InputSourceKind = "Keyboard Input Method";
              }
            ];
          };
          "com.apple.inputmethod.Kotoeri" = {
            JIMPrefLiveConversionKey = 0;
          };
        };
      };
      keyboard = {
        enableKeyMapping = true;
        remapCapsLockToControl = true;
      };
    };
    security.pam.services.sudo_local = {
      enable = true;
      reattach = true;
      touchIdAuth = true;
    };
  };
}
