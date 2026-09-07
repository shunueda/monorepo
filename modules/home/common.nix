{ inputs, config, ... }:
let
  inherit (config) constants;
in
{
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
            };
            keyboard = {
              bindings =
                lib.mapAttrsToList
                  (key: action: {
                    inherit key action;
                    mods = "Control";
                    mode = "Vi";
                  })
                  {
                    # keep-sorted start
                    A = "First";
                    B = "Left";
                    E = "Last";
                    F = "Right";
                    N = "Down";
                    P = "Up";
                    S = "SearchForward";
                    Space = "ToggleNormalSelection";
                    W = "Copy";
                    Y = "Paste";
                    # keep-sorted end
                  }
                ++ (lib.mapAttrsToList
                  (key: action: {
                    inherit key action;
                    mods = "Control";
                  })
                  {
                    # keep-sorted start
                    S = "SearchForward";
                    Y = "Paste";
                    # keep-sorted end
                  }
                );
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

            z() {
              local repo=$(ghq list | fzf) && cd "$(ghq root)/$repo"
            }

            zi() {
              local root=$(git rev-parse --show-toplevel)
              local dir=$(fd --type d . "$root" | fzf) && cd "$dir"
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
          extraPackages =
            epkgs: with epkgs; [
              # keep-sorted start
              avy
              consult
              corfu
              diff-hl
              dimmer
              elisp-autofmt
              embark
              embark-consult
              envrc
              exec-path-from-shell
              forge
              ghq
              gptel
              hl-todo
              kkp
              kotlin-ts-mode
              magit
              markdown-mode
              multiple-cursors
              nix-ts-mode
              ocaml-eglot
              orderless
              paredit
              pr-review
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
              xclip
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
            key = constants.ueda.keys.fingerprint;
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
              source = constants.ueda.keys.gpg;
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
            coreutils
            docker
            git-absorb
            homerow
            hut
            moreutils
            pngpaste
            qrcode
            sops
            tree
            ueda-tools
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
