{
  lib,
  fetchurl,
  stdenvNoCC,
  unzip,
}:

stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "steam-darwin";
  version = "1785799196";

  src = fetchurl {
    name = "appdmg_osx-${finalAttrs.version}.zip";
    url = "https://client-update.fastly.steamstatic.com/appdmg_osx.zip.984652b88a9737e3f4e77c656d9ffa67d5042c2c";
    hash = "sha256-i/TOi0vLxQ9kKYjJVVWfYF56h3NyEW56Kz/RNVAEvts=";
  };

  strictDeps = true;
  __structuredAttrs = true;

  nativeBuildInputs = [ unzip ];

  sourceRoot = ".";

  postUnpack = ''
    unpackFile SteamMacBootstrapper.tar.gz
    find . -name '._*' -delete
  '';

  installPhase = ''
    mkdir -p $out/Applications
    cp -r *.app $out/Applications
  '';

  meta = {
    license = lib.licenses.unfree;
    platforms = lib.platforms.darwin;
  };
})
