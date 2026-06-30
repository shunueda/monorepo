{
  inputs,
  pkgs,
  lib,
  stdenv,
  constants,
  ...
}:
let
  inherit inputs;
  inherit (stdenv.hostPlatform) system;

  tfProviders = inputs.nixpkgs-terraform-providers-bin.legacyPackages.${system}.providers;

  uedaTerraformProviders = with tfProviders; [
    wombelix.sourcehut
    integrations.github
    cloudflare.cloudflare
  ];

  pl2nixOverlay = final: prev: {
    mkNpmModule =
      args:
      let
        orig = prev.mkNpmModule args;
      in
      orig.overrideAttrs (
        self:
        lib.optionalAttrs (builtins.pathExists (self.src + "/tsconfig.json")) {
          nativeBuildInputs =
            self.nativeBuildInputs or [ ]
            ++ (with pkgs; [
              jq
              moreutils
            ]);
          prePatch = orig.prePatch or "" + ''
            jq --arg tsconfig ${../tsconfig.json} '
              if has("extends")
              then .extends = $tsconfig
              else .
              end
            ' tsconfig.json | sponge tsconfig.json
          '';
        }
      );
  };

  scope = lib.makeScope pkgs.newScope (
    scopeSelf:
    let
      inherit (scopeSelf) callPackage;
    in
    {
      inherit inputs constants uedaTerraformProviders;

      inherit (inputs.tools.packages.${system}) nix-flake-check-changed nix-grep-to-build;

      terraform = pkgs.terraform.withPlugins (_: uedaTerraformProviders);

      nodejs = pkgs.nodejs_24;

      package-lock2nix = callPackage inputs.package-lock2nix.lib.package-lock2nix {
        inherit (scopeSelf) nodejs;
        overrideScope = pl2nixOverlay;
      };

      uedaPassWrapper = callPackage ./ueda-pass-wrapper.nix { };
    }
    // lib.packagesFromDirectoryRecursive {
      inherit callPackage;
      directory = ../packages;
    }
  );
  overlay = final: prev: {
    ueda-cdktf = prev.ueda-cdktf.override {
      package-lock2nix = final.package-lock2nix.override { nodejs = pkgs.nodejs_22; };
    };
    ueda-cdktf-providers = prev.ueda-cdktf-providers.override {
      package-lock2nix = final.package-lock2nix.override { nodejs = pkgs.nodejs_22; };
    };
  };
in
scope.overrideScope overlay
