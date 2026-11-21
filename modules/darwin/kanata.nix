{
  config,
  lib,
  pkgs,
  ...
}:
let
  cfg = config.services.kanata;
  driver = cfg.package.passthru.darwinDriver;
  driverDir = "/Applications/.Nix-Karabiner";
in
{
  options.services.kanata = {
    enable = lib.mkEnableOption "kanata";
    package = lib.mkPackageOption pkgs "kanata" { };
    config = lib.mkOption {
      type = lib.types.lines;
      description = "kanata configuration (.kbd).";
    };
  };

  config = lib.mkIf cfg.enable {
    launchd.daemons = {
      karabiner-vhid-activate = {
        script = ''
          if [[ $(cat ${driverDir}/.source 2>/dev/null) != ${driver} ]]; then
            rm -rf ${driverDir}
            mkdir -p ${driverDir}
            cp -R ${driver}/Applications/.Karabiner-VirtualHIDDevice-Manager.app ${driverDir}
            echo ${driver} > ${driverDir}/.source
          fi
          exec ${driverDir}/.Karabiner-VirtualHIDDevice-Manager.app/Contents/MacOS/Karabiner-VirtualHIDDevice-Manager activate
        '';
        serviceConfig.RunAtLoad = true;
      };
      karabiner-vhid-daemon.serviceConfig = {
        ProgramArguments = [
          "${driver}/Library/Application Support/org.pqrs/Karabiner-DriverKit-VirtualHIDDevice/Applications/Karabiner-VirtualHIDDevice-Daemon.app/Contents/MacOS/Karabiner-VirtualHIDDevice-Daemon"
        ];
        RunAtLoad = true;
        KeepAlive = true;
        ProcessType = "Interactive";
      };
      kanata.serviceConfig = {
        ProgramArguments = [
          (lib.getExe cfg.package)
          "--cfg"
          "${pkgs.writeText "kanata.kbd" cfg.config}"
        ];
        RunAtLoad = true;
        KeepAlive = true;
        ProcessType = "Interactive";
        StandardOutPath = "/var/log/kanata.log";
        StandardErrorPath = "/var/log/kanata.log";
      };
    };
  };
}
