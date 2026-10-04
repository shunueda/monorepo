{
  dune2nix,
  zstd,
  gmp,
  zlib,
  curl,
  pkg-config,
  pkgconf,
  lib,
  stdenv,
}:

dune2nix.mkDuneProject {
  name = "hello-ocaml";
  src = ./.;

  buildInputs = [
    gmp
    zlib
  ];

  nativeBuildInputs = [
    curl
    pkg-config
  ]
  ++ lib.optionals stdenv.hostPlatform.isDarwin [ pkgconf ];

  duneSeparateDeps = true;
}
