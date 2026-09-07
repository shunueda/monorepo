{ ... }: {
  perSystem.treefmt = { pkgs, lib, ... }: {
    programs = {
      # keep-sorted start block=yes
      actionlint.enable = true;
      autocorrect.enable = true;
      clang-format.enable = true;
      keep-sorted.enable = true;
      mdformat = {
        enable = true;
        settings = {
          wrap = 80;
        };
      };
      nixfmt = {
        enable = true;
        strict = true;
      };
      oxfmt.enable = true;
      shellcheck.enable = true;
      typstyle.enable = true;
      # keep-sorted end
    };
    settings = {
      formatter = {
        elisp-autofmt = {
          command = lib.getExe pkgs.bash;
          options = [
            "-euc"
            ''
              dir=(${pkgs.emacsPackages.elisp-autofmt}/share/emacs/site-lisp/elpa/elisp-autofmt-*)
              ${lib.getExe pkgs.python3} "''${dir[0]}/elisp-autofmt.py" \
                --fmt-style fixed \
                --fmt-defs-dir "''${dir[0]}" \
                --fmt-defs elisp-autofmt.overrides.json \
                "$@"
            ''
            "--"
          ];
          includes = [ "*.el" ];
        };
      };
      global.excludes = [ "*/gen/*" ];
    };
  };
}
