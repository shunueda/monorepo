{ dune2nix }:

dune2nix.mkDuneProject {
  name = "hello-ocaml";
  src = ./.;

  duneSeparateDeps = true;
}
