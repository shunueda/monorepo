{ inputs, ... }: {
  flake.homeModules.common =
    {
      pkgs,
      config,
      lib,
      ...
    }:
    let
      inherit (pkgs.stdenv.hostPlatform) system isDarwin;
      availableOnSystem = lib.meta.availableOn { inherit system; };
    in
    {
      imports = [
        inputs.nocommit.homeModules.default
        inputs.direnv-instant.homeModules.default
        ./ghq.nix
      ];
      xdg = {
        enable = true;
        configFile = {
          emacs = {
            source = ../../emacs;
            recursive = true;
          };
        };
      };
      programs = {
        # keep-sorted start block=yes
        alacritty = {
          enable = true;
          theme = "alabaster";
          settings = {
            window = {
              option_as_alt = "Both";
              padding = {
                x = 10;
                y = 10;
              };
              # TODO: tmux migration
              # decorations = "Buttonless";
              # startup_mode = "Maximized";
            };
          };
        };
        bash = {
          enable = true;
          shellOptions = [
            "globstar"
            "histreedit"
            "extglob"
          ];
          historyControl = [
            "ignorespace"
            "ignoredups"
          ];
          historySize = 1000000;
          historyFileSize = 1000000;
          historyFile = "${config.home.homeDirectory}/.sh_history";
          initExtra = ''
            export PS1="\[\033[1;32m\]\u@\h\[\033[0m\]:\[\033[1;34m\]\w\[\033[0m\]\$ "

            # Doesn't get propagaed to nw Emacs - something to do with Tmux?
            export SSH_AUTH_SOCK=$(gpgconf --list-dirs agent-ssh-socket)

            histsync() {
              history -a

              local passentry="ShellHistories/$HOSTNAME"

              (cat "$HISTFILE" 2>/dev/null; pass show "$passentry" 2>/dev/null) |
                awk '!a[$0]++' |
                ${pkgs.moreutils}/bin/sponge "$HISTFILE"

              <"$HISTFILE" pass insert -mf "$passentry"

              history -c
              history -r
            }

            z() {
              local dir
              if [[ -z $1 ]]; then
                repo=$(ghq list | fzf) || return
                dir="$(ghq root)/$repo"
              else
                dir=$(fd --type d . | fzf --query "$*") || return
              fi
              cd "$dir"
            }

            . "${pkgs.passExtensions.pass-otp}/share/bash-completion/completions/pass-otp"
          '';
        };
        direnv = {
          enable = true;
          nix-direnv.enable = true;
        };
        direnv-instant = {
          enable = true;
          settings.mux_delay = 0;
        };
        emacs = {
          enable = true;
          package = pkgs.emacs31;
          overrides = self: super: {
            direnv = super.direnv.overrideAttrs (_: {
              src = inputs.emacs-direnv-async;
            });
            dimmer = super.dimmer.overrideAttrs (_: {
              src = inputs.dimmer;
            });
          };
          extraPackages =
            epkgs: with epkgs; [
              # keep-sorted start
              avy
              consult
              corfu
              diff-hl
              dimmer
              direnv
              embark
              embark-consult
              exec-path-from-shell
              forge
              ghq
              gptel
              kkp
              kotlin-ts-mode
              magit
              markdown-mode
              multiple-cursors
              nix-ts-mode
              ocaml-eglot
              orderless
              paredit
              rust-mode
              smartparens
              sops
              super-save
              treesit-auto
              treesit-grammars.with-all-grammars
              tuareg
              typst-ts-mode
              undo-tree
              vertico
              wgrep
              xclip
              zenburn-theme
              # keep-sorted end
            ];
        };
        fd.enable = true;
        fzf.enable = true;
        ghq = {
          enable = true;
          settings = {
            root = "${config.home.homeDirectory}/code";
          };
        };
        git = {
          enable = true;
          signing = {
            key = "C879B61CBD7C81A8783AD90965A3009821043C2C";
            format = "openpgp";
          };
          settings = {
            init = {
              defaultBranch = "master";
            };
            user = {
              name = "Shun Ueda";
              email = "git@shunueda.org";
            };
            diff.algorithm = "histogram";
            rebase = {
              autosquash = true;
              autostash = true;
              stat = true;
            };
            merge.directoryRenames = true;
            rerere = {
              autoupdate = true;
              enabled = true;
            };
            pull.rebase = true;
            push.autoSetupRemote = true;
            github.user = "shunueda";
          };
        };
        gpg = {
          enable = true;
          publicKeys = [
            {
              source = ../../keys/C879B61CBD7C81A8783AD90965A3009821043C2C.asc;
              trust = "ultimate";
            }
          ];
          scdaemonSettings = {
            disable-ccid = true;
          };
          settings = {
            keyid-format = "0xlong";
            with-fingerprint = true;
            list-options = "show-uid-validity";
            verify-options = "show-uid-validity";
            no-comments = true;
            no-emit-version = true;
            no-greeting = true;
          };
        };
        home-manager.enable = true;
        # TODO: separate homeModule for desktop
        librewolf = lib.mkIf isDarwin {
          enable = true;
          policies = {
            GenerativeAI.Enabled = false;
          };
          nativeMessagingHosts = with pkgs; [ passff-host ];
          profiles.default = {
            search = {
              force = true;
              default = "ddg-noai";
              engines = {
                "ddg-noai" = {
                  urls = [
                    {
                      template = "https://noai.duckduckgo.com/";
                      params = [ (lib.nameValuePair "q" "{searchTerms}") ];
                    }
                  ];
                  definedAliases = [ "@noai" ];
                };
              };
            };
            extensions = {
              force = true;
              packages = with pkgs.nur.repos.rycee.firefox-addons; [ passff ];
            };
            settings = {
              force = true;
              "extensions.autoDisableScopes" = 0; # Enable extensions automatically
              "browser.startup.homepage" = "about:blank";
              "browser.startup.page" = 1; # homepage
              "browser.newtab.url" = "about:blank";
              "signon.rememberSignons" = false;
              "browser.toolbars.bookmarks.visibility" = "never";
              # Make rendering smoother
              "privacy.resistFingerprinting" = false;
              "layers.acceleration.force-enabled" = true;
              "gfx.webrender.all" = true;
            };
          };
        };
        mergiraf = {
          enable = true;
          enableGitIntegration = true;
        };
        nocommit = {
          enable = true;
          enableGitIntegration = true;
          useConfigBasedHook = true;
        };
        password-store = {
          enable = true;
          package = pkgs.pass.withExtensions (
            exts: with exts; [
              pass-file
              pass-otp
            ]
          );
        };
        ripgrep.enable = true;
        ssh = {
          enable = true;
          enableDefaultConfig = false;
          settings = {
            "*" = {
              # Dangerous! Explicitly turn off for all hosts.
              ForwardAgent = false;
            };
            "*.local" = {
              ForwardAgent = true;
            };
          };
        };
        tmux = {
          enable = true;
          mouse = true;
          newSession = true;
          shortcut = "t";
          terminal = "xterm-256color";
          extraConfig = ''
            set -g status-position top

            set -g status off

            # Prevent (Darwin) `path_helper` from destroying PATH
            set -g default-command "''${SHELL} -l"
          '';
        };
        wezterm = {
          enable = true;

          settings =
            let
              luaAction = expr: lib.generators.mkLuaInline expr;
            in
            {
              color_scheme = "Alabaster";
              font_rasterizer = "CoreText";
              hide_tab_bar_if_only_one_tab = true;
              disable_default_key_bindings = true;
              line_height = 0.9;
              font_size = 11;
              enable_kitty_keyboard = true;
              max_fps = 120;
              window_decorations = "RESIZE";
              front_end = "WebGpu";

              show_new_tab_button_in_tab_bar = false;
              show_close_tab_button_in_tabs = false;
              colors = {
                tab_bar = {
                  inactive_tab_edge = "none";
                };
              };

              # Prefix key: C-t (tmux-style)
              leader = {
                key = "t";
                mods = "CTRL";
                timeout_milliseconds = 1000;
              };

              keys = [
                # Press C-t twice to send a literal C-t to the shell/app
                {
                  key = "t";
                  mods = "LEADER|CTRL";
                  action = luaAction "wezterm.action.SendKey{key='t',mods='CTRL'}";
                }

                # Split vertically (stacked) — Emacs: C-x 2 (split-window-below)
                {
                  key = "2";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.SplitVertical{domain='CurrentPaneDomain'}";
                }

                # Split horizontally (side-by-side) — Emacs: C-x 3 (split-window-right)
                {
                  key = "3";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.SplitHorizontal{domain='CurrentPaneDomain'}";
                }

                # Close current pane — Emacs: C-x 0 (delete-window)
                {
                  key = "0";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.CloseCurrentPane{confirm=true}";
                }

                # Switch between panes — windmove-style (S-<arrow>), adapted under LEADER
                {
                  key = "LeftArrow";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.ActivatePaneDirection 'Left'";
                }
                {
                  key = "DownArrow";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.ActivatePaneDirection 'Down'";
                }
                {
                  key = "UpArrow";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.ActivatePaneDirection 'Up'";
                }
                {
                  key = "RightArrow";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.ActivatePaneDirection 'Right'";
                }

                # Cycle panes — Emacs: C-x o (other-window)
                {
                  key = "o";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.ActivatePaneDirection 'Next'";
                }
                {
                  key = "O";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.ActivatePaneDirection 'Prev'";
                }

                # Enter select (copy) mode
                {
                  key = "[";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.ActivateCopyMode";
                }

                # Yank — Emacs: C-y
                {
                  key = "y";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.PasteFrom 'Clipboard'";
                }

                # Tab (window) management — Emacs: C-x t 2 / C-x t 0 / C-x t o (tab-bar-mode)
                {
                  key = "t";
                  mods = "LEADER";
                  action = luaAction "wezterm.action.ActivateKeyTable{name='tab_prefix',one_shot=true}";
                }

                # Non-tmux essentials restored (needed since defaults are disabled)
                {
                  key = "c";
                  mods = "CTRL|SHIFT";
                  action = luaAction "wezterm.action.CopyTo 'Clipboard'";
                }
                {
                  key = "v";
                  mods = "CTRL|SHIFT";
                  action = luaAction "wezterm.action.PasteFrom 'Clipboard'";
                }
                {
                  key = "=";
                  mods = "CTRL";
                  action = luaAction "wezterm.action.IncreaseFontSize";
                }
                {
                  key = "-";
                  mods = "CTRL";
                  action = luaAction "wezterm.action.DecreaseFontSize";
                }
                {
                  key = "0";
                  mods = "CTRL|SHIFT";
                  action = luaAction "wezterm.action.ResetFontSize";
                }
              ];

              key_tables = {
                # LEADER t <key> — mirrors Emacs tab-bar-mode's C-x t <key>
                tab_prefix = [
                  {
                    key = "2";
                    action = luaAction "wezterm.action.SpawnTab 'CurrentPaneDomain'";
                  }
                  {
                    key = "0";
                    action = luaAction "wezterm.action.CloseCurrentTab{confirm=true}";
                  }
                  {
                    key = "o";
                    action = luaAction "wezterm.action.ActivateTabRelative(1)";
                  }
                  {
                    key = "O";
                    action = luaAction "wezterm.action.ActivateTabRelative(-1)";
                  }
                ];

                copy_mode = [
                  {
                    key = "Escape";
                    action = luaAction "wezterm.action.CopyMode 'Close'";
                  }
                  {
                    key = "g";
                    mods = "CTRL";
                    action = luaAction "wezterm.action.CopyMode 'Close'";
                  }

                  {
                    key = "f";
                    mods = "CTRL";
                    action = luaAction "wezterm.action.CopyMode 'MoveRight'";
                  }
                  {
                    key = "b";
                    mods = "CTRL";
                    action = luaAction "wezterm.action.CopyMode 'MoveLeft'";
                  }
                  {
                    key = "n";
                    mods = "CTRL";
                    action = luaAction "wezterm.action.CopyMode 'MoveDown'";
                  }
                  {
                    key = "p";
                    mods = "CTRL";
                    action = luaAction "wezterm.action.CopyMode 'MoveUp'";
                  }
                  {
                    key = "a";
                    mods = "CTRL";
                    action = luaAction "wezterm.action.CopyMode 'MoveToStartOfLine'";
                  }
                  {
                    key = "e";
                    mods = "CTRL";
                    action = luaAction "wezterm.action.CopyMode 'MoveToEndOfLineContent'";
                  }

                  {
                    key = "Space";
                    mods = "CTRL";
                    action = luaAction "wezterm.action.CopyMode{SetSelectionMode='Cell'}";
                  }
                  {
                    key = "w";
                    mods = "CTRL";
                    action = luaAction ''
                      wezterm.action.Multiple{
                        wezterm.action.CopyTo 'ClipboardAndPrimarySelection',
                        wezterm.action.CopyMode 'Close',
                      }
                    '';
                  }
                ];
              };
            };
        };
        # keep-sorted end
      };
      services = {
        colima = {
          enable = true;
        };
        gpg-agent = {
          enable = true;
          enableSshSupport = true;
          pinentry = {
            package = lib.mkIf isDarwin pkgs.pinentry_mac;
          };
          defaultCacheTtl = 600;
          maxCacheTtl = 7200;
        };
      };
      fonts.fontconfig.enable = true;
      home = {
        packages = lib.filter availableOnSystem (
          with pkgs;
          [
            # keep-sorted start
            docker
            git-absorb
            homerow
            hut
            pngpaste
            qrcode
            sops
            yubikey-manager
            zbar
            # keep-sorted end
          ]
        );
        file = {
          ".hushlogin" = {
            text = "";
          };
        };
        activation = {
          # Darwin-specific activation script
          darwin = lib.mkIf isDarwin (
            lib.hm.dag.entryAfter [ "writeBoundary" ] ''
              # Set the default browser
              ${lib.getExe pkgs.defaultbrowser} ${pkgs.librewolf.pname}

              # Set display resolution, assumes 14-inch.
              ${lib.getExe pkgs.displaymode} t 1800 1169
            ''
          );
        };
      };
    };
}
