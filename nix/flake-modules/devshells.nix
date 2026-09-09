{ ... }: {
  perSystem =
    {
      inputs',
      pkgs,
      lib,
      config,
      ...
    }:
    let
      uedaScope = config.ueda.scope;
    in
    {
      devshells.default =
        let
          rustToolchain = with inputs'.fenix.packages; combine [ complete.toolchain ];
        in
        {
          packages =
            with pkgs;
            with uedaScope;
            [
              # Tools
              awscli2
              clang
              dune
              nodejs
              python3
              rustToolchain
              terraform

              # LSPs
              nixd
              typescript-language-server

              # Required for OCaml compiler
              libllvm
              gnumake
              zstd

              # Required for building janestreet/gel.
              # https://discuss.ocaml.org/t/issue-with-gel-prevents-install-of-jane-street-core-under-5-3-0/16909/5
              gnupatch
            ];
          env = lib.optionals pkgs.stdenv.isDarwin [
            {
              name = "SDKROOT";
              value = pkgs.apple-sdk_26;
            }
            {
              name = "LIBRARY_PATH";
              value = "${pkgs.libiconv}/lib";
            }
          ];
        };
    };
}
