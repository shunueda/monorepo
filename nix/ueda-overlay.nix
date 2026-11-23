{
  inputs,
  self,
  lib,
}:

lib.composeManyExtensions [
  (
    final: prev:
    let
      inherit (prev.stdenv.hostPlatform) system isDarwin;

      pkgs-unstable = import inputs.nixpkgs-unstable {
        inherit system;
        config.allowUnfree = true;
        overlays = [ treeSitterGrammarsOverlay ];
      };

      treeSitterGrammarsOverlay = final: prev: {
        tree-sitter-grammars = prev.tree-sitter-grammars.overrideScope (
          gfinal: gprev:
          let
            ocaml = final.fetchFromGitHub {
              owner = "tree-sitter";
              repo = "tree-sitter-ocaml";
              tag = "v0.26.0-abi14";
              hash = "sha256-0F5ozhiIp86UiAg3jxnBtpXwo6OIvvsKU5aDlen0go0=";
            };
          in
          {
            tree-sitter-ocaml = gprev.tree-sitter-ocaml.override {
              version = "0.26.0";
              src = ocaml;
            };
            tree-sitter-ocaml-interface = gprev.tree-sitter-ocaml-interface.override {
              version = "0.26.0";
              src = ocaml;
            };
            tree-sitter-dune = gprev.tree-sitter-dune.override {
              version = "0.1.1";
              src = final.fetchFromGitHub {
                owner = "ocaml-dune";
                repo = "tree-sitter-dune";
                tag = "0.1.1";
                hash = "sha256-8mQLq+vu7ypfkXZ9Lx1FYlh5m/Z4f/7CyYnB4Ve/D+A=";
              };
            };
          }
        );
      };
    in
    {
      # Custom packages
      inherit (self.packages.${system}) displaymode;

      inherit (pkgs-unstable)
        # Backport from unstable
        prismlauncher
        emacsPackagesFor
        river
        ;

      oxbow = self.inputs.oxbow.packages.${system}.default;

      emacs =
        if isDarwin then
          pkgs-unstable.emacs31.overrideAttrs (old: {
            patches =
              old.patches or [ ]
              ++ lib.optionals isDarwin [
                ../patches/emacs-31/fix-ns-x-colors.patch
                ../patches/emacs-31/round-undecorated-frame.patch
              ];
          })
        else
          pkgs-unstable.emacs31-pgtk;
    }
  )
  inputs.emacs-overlay.overlays.package
  inputs.dune2nix.overlays.dune
]
