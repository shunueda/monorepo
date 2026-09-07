{ lib, elisp-autofmt }: {
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
        command = lib.getExe elisp-autofmt;
        includes = [ "*.el" ];
      };
    };
    global.excludes = [ "*/gen/*" ];
  };
}
