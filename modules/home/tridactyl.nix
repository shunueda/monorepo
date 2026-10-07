{ lib, ... }:
let
  prelude = [
    "set modeindicatorshowkeys true"
    "set smoothscroll true"
    "unbind --all"
  ];

  # Binds run in normal mode unless `mode` is given.
  binds = [
    # M-x: command line
    {
      key = "<C-x><C-m>";
      command = "fillcmdline_notrail";
    }
    # C-x prefix (C-x alone must stay unbound, else it shadows these)
    {
      key = "<C-x><C-f>";
      command = "fillcmdline open";
    }
    {
      key = "<C-x>f";
      command = "fillcmdline open";
    }
    {
      key = "<C-x>4f";
      command = "fillcmdline tabopen";
    }
    {
      key = "<C-x>o";
      command = "tabnext";
    }
    {
      key = "<C-x><C-o>";
      command = "tabnext";
    }
    {
      key = "<C-x>0";
      command = "tabclose";
    }
    {
      key = "<C-x>b";
      command = "fillcmdline tab";
    }
    {
      key = "<C-x><C-b>";
      command = "fillcmdline tab";
    }
    # Sloppy chords (Ctrl released before X)
    {
      key = "<C-x><U-x>f";
      command = "fillcmdline open";
    }
    {
      key = "<C-x><U-x>4f";
      command = "fillcmdline tabopen";
    }
    {
      key = "<C-x><U-x>o";
      command = "tabnext";
    }
    {
      key = "<C-x><U-x>0";
      command = "tabclose";
    }
    {
      key = "<C-x><U-x>b";
      command = "fillcmdline tab";
    }
    # Reload config (second line tolerates sloppy chords)
    {
      key = "<C-c><C-e>";
      command = "source";
    }
    {
      key = "<C-c><U-c><C-e>";
      command = "source";
    }
    # De-focus text fields, like C-g
    {
      mode = "insert";
      key = "<C-g>";
      command = "composite unfocus | mode normal";
    }
    {
      mode = "input";
      key = "<C-g>";
      command = "composite unfocus | mode normal";
    }
    # Cancel in hint/ex/normal mode, like C-g
    {
      mode = "hint";
      key = "<C-g>";
      command = "hint.reset";
    }
    {
      mode = "ex";
      key = "<C-g>";
      command = "ex.hide_and_clear";
    }
    {
      key = "<C-g>";
      command = "composite mode normal ; hidecmdline";
    }
    # Completion navigation in command line, like C-n / C-p
    {
      mode = "ex";
      key = "<C-n>";
      command = "ex.next_completion";
    }
    {
      mode = "ex";
      key = "<C-p>";
      command = "ex.prev_completion";
    }
    # Scrolling: hold C-n/p to glide; tap = small glide
    {
      key = "<DC-n>";
      command = "scrollstart 0 100";
    }
    {
      key = "<UC-n>";
      command = "scrollstop";
    }
    {
      key = "<U-n>";
      command = "scrollstop";
    }
    {
      key = "<DC-p>";
      command = "scrollstart 0 -100";
    }
    {
      key = "<UC-p>";
      command = "scrollstop";
    }
    {
      key = "<U-p>";
      command = "scrollstop";
    }
    {
      key = "<C-v>";
      command = "scrollpage 0.5";
    }
    {
      key = "<C-f>";
      command = "scrollpx 50";
    }
    {
      key = "<C-b>";
      command = "scrollpx -50";
    }
    {
      key = "<C-a>";
      command = "scrollto 0";
    }
    {
      key = "<C-e>";
      command = "scrollto 100";
    }
    # Find, like C-s / C-r
    {
      key = "<C-s>";
      command = "fillcmdline find";
    }
    {
      key = "<C-r>";
      command = "fillcmdline find -?";
    }
    # Hints (no emacs equivalent)
    {
      key = "<C-'>";
      command = "hint";
    }
    # History
    {
      key = "<C-[>";
      command = "back";
    }
    {
      key = "<C-]>";
      command = "forward";
    }
  ];

  renderBind =
    {
      mode ? null,
      key,
      command,
    }:
    "bind${lib.optionalString (mode != null) " --mode=${mode}"} ${key} ${command}";
in
{
  xdg.configFile."tridactyl/tridactylrc" = {
    text = lib.concatLines (prelude ++ map renderBind binds);
  };
}
