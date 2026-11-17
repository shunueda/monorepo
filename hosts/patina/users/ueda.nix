{
  self,
  config,
  lib,
  pkgs,
  ...
}:
let
  oxctl = "${pkgs.oxbow}/bin/oxctl";

  binds =
    let
      spawn = cmd: "spawn ${lib.escapeShellArg cmd}";
    in
    {
      "Super+space" = spawn "fuzzel";
      "Super+Alt+l" = spawn "swaylock";
      "Super+m" = "window toggle maximize";

      "Super+c" = spawn "wl-copy";
      "Super+v" = spawn "wl-paste";

      "Super+Tab" = "output overview cycle next --until-release=Super";
      "Super+Shift+Tab" = "output overview cycle prev --until-release=Super";

      "XF86AudioRaiseVolume" = spawn "wpctl set-volume @DEFAULT_AUDIO_SINK@ 0.1+ -l 1.0";
      "XF86AudioLowerVolume" = spawn "wpctl set-volume @DEFAULT_AUDIO_SINK@ 0.1-";
      "XF86AudioMute" = spawn "wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle";
      "XF86AudioMicMute" = spawn "wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle";
      "XF86AudioPlay" = spawn "playerctl play-pause";
      "XF86AudioStop" = spawn "playerctl stop";
      "XF86AudioPrev" = spawn "playerctl previous";
      "XF86AudioNext" = spawn "playerctl next";
      "XF86MonBrightnessUp" = spawn "brightnessctl --class=backlight set +5%";
      "XF86MonBrightnessDown" = spawn "brightnessctl --class=backlight set 5%-";
    };

  bindLines = lib.concatMapAttrsStringSep "\n" (key: cmd: ''
    ${oxctl} unbind ${key} 2>/dev/null
    ${oxctl} bind ${cmd} to ${key}
  '') binds;
in
{
  imports = [ self.homeModules.common ];

  home.packages = with pkgs; [
    river
    oxbow
    wl-clipboard
  ];

  xdg.configFile."river/init".source = pkgs.writeShellScript "river-init" ''
    export XDG_CURRENT_DESKTOP=river

    ${pkgs.dbus}/bin/dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP

    exec ${lib.getExe pkgs.oxbow}
  '';

  xdg.configFile."oxbow/init".source = pkgs.writeShellScript "oxbow-init" ''
    # layout and look (animations/focus ring don't exist here, matching your niri setup)
    ${oxctl} layout tiling monocle --all
    ${oxctl} gaps inner 4 --all
    ${oxctl} gaps outer 0 --all
    ${oxctl} border width 2
    ${oxctl} border color focused '#7FB4CA'
    ${oxctl} border color unfocused '#727169'
    ${oxctl} border color urgent '#FF5D62'

    ${oxctl} input keyboard repeat 67 225
    ${oxctl} input rules touchpad --name '.*' --tap disabled --natural-scroll enabled

    # output scale
    ${lib.getExe pkgs.wlr-randr} --output eDP-1 --scale 1.5

    # keybinds
    ${bindLines}

    # autostart
    ${config.programs.waybar.package}/bin/waybar &
  '';

  programs = {
    # keep-sorted start block=yes
    fuzzel.enable = true;
    swaylock.enable = true;
    waybar = {
      enable = true;
      settings.mainBar = {
        layer = "bottom";
        position = "top";
        height = 42; # Match the Notch size on 14-in MacBook Pro
        margin = "0";
        exclusive = true;
        modules-left = [ "custom/window" ];
        modules-right = [
          "network"
          "battery"
          "clock"
        ];
        "custom/window" = {
          exec = "${oxctl} subscribe window | ${lib.getExe pkgs.jq} --unbuffered -r '.app_id // \"\"'";
          format = "{}";
        };
        clock.format = "{:%a %b %d  %I:%M %p}";
      };
      style = ''
        * { min-height: 0; border: none; border-radius: 0; background: transparent; }
        #custom-window, #network, #battery, #clock, #custom-lock { padding: 0 10px; }
        #custom-window { margin-left: 12px; }
        #custom-lock { margin-right: 12px; }
      '';
    };
  };
  # keep-sorted end
  home.stateVersion = "26.05";
}
