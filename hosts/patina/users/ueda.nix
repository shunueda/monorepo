{
  self,
  config,
  lib,
  ...
}:
{
  imports = [ self.homeModules.common ];
  programs = {
    # keep-sorted start block=yes
    fuzzel.enable = true;
    niri.settings = {
      animations.enable = false;
      input = {
        keyboard = {
          numlock = true;
          # Match macOS: KeyRepeat = 1 (~15 ms) and InitialKeyRepeat = 15 (225 ms)
          "repeat-delay" = 225;
          "repeat-rate" = 67;
        };
        touchpad = {
          tap = false;
          natural-scroll = true;
        };
      };
      outputs = {
        "eDP-1" = {
          scale = 1.5;
        };
      };
      recent-windows = {
        open-delay-ms = 0;
        previews = {
          max-height = 160; # px, default is 480
          max-scale = 0.15; # default is 0.5
        };
        highlight = {
          padding = 10;
          corner-radius = 10;
        };
      };
      layout =
        let
          gaps = 4;
        in
        {
          inherit gaps;
          struts = {
            top = -gaps;
            bottom = -gaps;
          };
          center-focused-column = "never";
          focus-ring = {
            enable = false;
          };
          preset-column-widths = [
            { proportion = 0.33333; }
            { proportion = 0.5; }
            { proportion = 0.66667; }
          ];
        };
      window-rules = [
        {
          geometry-corner-radius =
            let
              r = 12.0;
            in
            {
              top-left = r;
              top-right = r;
              bottom-left = r;
              bottom-right = r;
            };
          clip-to-geometry = true;
        }
      ];

      binds = with config.lib.niri.actions; {
        "Mod+Space" = {
          action = spawn "fuzzel";
          hotkey-overlay.title = "Run an Application: fuzzel";
        };
        "Super+Alt+L" = {
          action = spawn "swaylock";
          hotkey-overlay.title = "Lock the Screen: swaylock";
        };

        "XF86AudioRaiseVolume" = {
          action = spawn-sh "wpctl set-volume @DEFAULT_AUDIO_SINK@ 0.1+ -l 1.0";
          allow-when-locked = true;
        };
        "XF86AudioLowerVolume" = {
          action = spawn-sh "wpctl set-volume @DEFAULT_AUDIO_SINK@ 0.1-";
          allow-when-locked = true;
        };
        "XF86AudioMute" = {
          action = spawn-sh "wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle";
          allow-when-locked = true;
        };
        "XF86AudioMicMute" = {
          action = spawn-sh "wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle";
          allow-when-locked = true;
        };
        "XF86AudioPlay" = {
          action = spawn-sh "playerctl play-pause";
          allow-when-locked = true;
        };
        "XF86AudioStop" = {
          action = spawn-sh "playerctl stop";
          allow-when-locked = true;
        };
        "XF86AudioPrev" = {
          action = spawn-sh "playerctl previous";
          allow-when-locked = true;
        };
        "XF86AudioNext" = {
          action = spawn-sh "playerctl next";
          allow-when-locked = true;
        };
        "XF86MonBrightnessUp" = {
          action = spawn "brightnessctl" "--class=backlight" "set" "+5%";
          allow-when-locked = true;
        };
        "XF86MonBrightnessDown" = {
          action = spawn "brightnessctl" "--class=backlight" "set" "5%-";
          allow-when-locked = true;
        };

        "Mod+Q" = {
          action = close-window;
          repeat = false;
        };

        "Mod+R".action = switch-preset-column-width;
        "Mod+F".action = maximize-column;
        "Mod+Minus".action = set-column-width "-10%";
        "Mod+Equal".action = set-column-width "+10%";
        "Mod+Shift+Minus".action = set-window-height "-10%";
        "Mod+Shift+Equal".action = set-window-height "+10%";

        "Mod+Shift+E".action = quit;
      };
    };
    swaylock.enable = true;
    waybar = {
      enable = true;
      systemd.enable = true;
      settings.mainBar = {
        layer = "bottom";
        position = "top";
        height = 42; # Match the Notch size on 14-in MacBook Pro
        margin = "0";
        exclusive = true;
        modules-left = [ "niri/window" ];
        modules-right = [
          "network"
          "battery"
          "clock"
          "custom/lock"
        ];
        "niri/window".format = "{app_id}";
        clock.format = "{:%a %b %d  %I:%M %p}";
        "custom/lock" = {
          format = "";
          on-click = "swaylock";
        };
      };
      style = ''
        * { min-height: 0; border: none; border-radius: 0; background: transparent; }
         #window, #network, #battery, #clock, #custom-lock { padding: 0 10px; }
         #window { margin-left: 12px; }
         #custom-lock { margin-right: 12px; }
      '';
    };
  };
  # keep-sorted end
  home.stateVersion = "26.05";
}
