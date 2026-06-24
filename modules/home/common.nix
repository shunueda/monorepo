{ inputs, self, ... }: {
  flake.homeModules.common =
    {
      pkgs,
      config,
      lib,
      ...
    }:
    let
      inherit (pkgs.stdenv.hostPlatform) system;
    in
    {
      imports = [
        inputs.nocommit.homeModules.default
        ./ghq.nix
      ];
      xdg = {
        enable = true;
        configFile = {
          "emacs" = {
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
              padding = {
                x = 10;
                y = 10;
              };
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

            . "${pkgs.passExtensions.pass-otp}/share/bash-completion/completions/pass-otp"
          '';
        };
        direnv = {
          enable = true;
          nix-direnv.enable = true;
        };
        emacs = {
          enable = true;
          overrides = self: super: {
            direnv = super.direnv.overrideAttrs (_: {
              src = inputs.emacs-direnv-async;
            });
          };
          extraPackages =
            epkgs: with epkgs; [
              # keep-sorted start
              avy
              consult
              corfu
              diff-hl
              direnv
              embark
              embark-consult
              exec-path-from-shell
              ghq
              gptel
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
        librewolf = {
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
        };
        starship = {
          enable = true;
          settings = {
            add_newline = false;
            format = "$git_branch:$directory $character ";
            character = {
              format = "[\\$](white)";
            };
            directory = {
              format = "[$path]($style)";
              style = "bold blue";
            };
            git_branch = {
              format = "[$branch]($style)";
              style = "bold green";
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
          pinentry.package = pkgs.pinentry_mac;
          defaultCacheTtl = 600;
          maxCacheTtl = 7200;
        };
      };
      fonts.fontconfig.enable = true;
      home = {
        packages = with pkgs; [
          # keep-sorted start
          docker
          homerow
          hut
          pngpaste
          qrcode
          sops
          yubikey-manager
          zbar
          # keep-sorted end
        ];
        file = {
          ".hushlogin" = {
            text = "";
          };
        };
        activation = {
          # Darwin-specific activation script
          darwin = lib.mkIf pkgs.stdenv.hostPlatform.isDarwin (
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
