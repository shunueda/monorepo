{ stdenv, lib }:

stdenv.mkDerivation (finalAttrs: {
  name = "displaymode";
  version = "1.0";

  src = ./displaymode.c;

  dontUnpack = true;

  buildPhase = ''
    $CC -std=c11 -lm -framework CoreFoundation -framework CoreGraphics -o ${finalAttrs.name} $src
  '';

  installPhase = ''
    mkdir -p $out/bin
    cp ${finalAttrs.name} $out/bin/
  '';

  meta = {
    description = "A command-line tool to manage display modes on macOS.";
    platforms = lib.platforms.darwin;
    licenses = lib.licenses.asl20;
    mainProgram = finalAttrs.name;
  };
})
