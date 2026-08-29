{
  lib,
  emacsPackages,
  fetchFromGitHub,
}:
emacsPackages.melpaBuild {
  pname = "remoto";
  version = "0.6.0-unstable-2026-07-23";

  src = fetchFromGitHub {
    owner = "agzam";
    repo = "remoto.el";
    rev = "e1f70b3d0d383b6179780960817b61faab974ba8";
    hash = "sha256-uWvYzvRc887Aq7xjzKMuTgbXUiLsBHWDgorBUQLlcKs=";
  };

  recipe = builtins.toFile "recipe" ''
    (remoto :fetcher github
            :repo "agzam/remoto.el"
            :files ("remoto.el" "remoto-embark.el"))
  '';

  packageRequires = with emacsPackages; [
    ghub
    embark
  ];

  meta = {
    description = "Browse and edit remote files (e.g. GitHub) as Emacs buffers";
    homepage = "https://github.com/agzam/remoto.el";
    license = lib.licenses.gpl3Plus;
    maintainers = [ ];
  };
}
