{ inputs, self }:

final: prev:
let
  inherit (final.stdenv.hostPlatform) system;

  pkgs-unstable = import inputs.nixpkgs-unstable {
    inherit system;
    config.allowUnfree = true;
  };
in
{
  # Custom packages
  inherit (self.packages.${system}) displaymode;

  # Backport from unstable
  inherit (pkgs-unstable) emacs31 homerow;

  # Band-ade until https://github.com/tmux/tmux/pull/5405
  tmux = prev.tmux.overrideAttrs {
    src = inputs.tmux-kitty;
    patches = [ ];
    version = "next-3.7";
  };

  wezterm = pkgs-unstable.wezterm.overrideAttrs (old: {
    src = inputs.wezterm-coretext;
    cargoDeps = pkgs-unstable.rustPlatform.fetchCargoVendor {
      src = inputs.wezterm-coretext;
      name = "${old.pname}-${old.version}";
      hash = "sha256-xXIKWAQ0fEWnz8HWzQQvAK+R68x8ZdIi5HXU11SWbhM=";
    };
  });
}
