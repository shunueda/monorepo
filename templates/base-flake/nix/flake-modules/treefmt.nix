{
  perSystem.treefmt.programs = {
    # keep-sorted start block=yes
    flake-edit.enable = true;
    keep-sorted.enable = true;
    nixfmt = {
      enable = true;
      strict = true;
    };
    # keep-sorted end
  };
}
