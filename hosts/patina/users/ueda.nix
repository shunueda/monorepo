{
  self,
  config,
  lib,
  ...
}:
{
  imports = [ self.homeModules.common ];
  programs = {
    fuzzel.enable = true;
    waybar = {
      enable = true;
      systemd.enable = true;
      settings.mainBar = {
        layer = "bottom";
        position = "top";
        height = 42; # Match the Notch size on 14-in MacBook Pro
        margin = "0";
        exclusive = true;
        modules-right = [
          "network"
          "battery"
          "clock"
        ];
      };
      style = ''
        * { min-height: 0; border: none; border-radius: 0; background: transparent; }
      '';
    };
    niri.settings = {
      input = {
        keyboard.numlock = true;
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

      layout = {
        gaps = 8;
        struts = {
          top = -8;
          bottom = -8;
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

      binds = with config.lib.niri.actions; {
        "Mod+T" = {
          action = spawn "alacritty";
          hotkey-overlay.title = "Open a Terminal: alacritty";
        };
        "Mod+D" = {
          action = spawn "fuzzel";
          hotkey-overlay.title = "Run an Application: fuzzel";
        };
        "Super+Alt+L" = {
          action = spawn "swaylock";
          hotkey-overlay.title = "Lock the Screen: swaylock";
        };
        "Super+Alt+S" = {
          action = spawn-sh "pkill orca || exec orca";
          allow-when-locked = true;
          hotkey-overlay.hidden = true;
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
          action = spawn "brightnessctl" "--class=backlight" "set" "+10%";
          allow-when-locked = true;
        };
        "XF86MonBrightnessDown" = {
          action = spawn "brightnessctl" "--class=backlight" "set" "10%-";
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
  };
  home.stateVersion = "26.05";
}
