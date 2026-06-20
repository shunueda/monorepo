{
  inputs,
  pkgs,
  lib,
  stdenv,
  ...
}:
let
  inherit (stdenv.hostPlatform) system;

  tfProviders = inputs.nixpkgs-terraform-providers-bin.legacyPackages.${system}.providers;

  uedaTerraformProviders = with tfProviders; [
    wombelix.sourcehut
    integrations.github
  ];

  scope = lib.makeScope pkgs.newScope (
    scopeSelf:
    let
      inherit (scopeSelf) callPackage;
    in
    {
      inherit inputs uedaTerraformProviders;

      inherit (inputs.tools.packages.${system}) nix-flake-check-changed nix-grep-to-build;

      terraform = pkgs.terraform.withPlugins (_: uedaTerraformProviders);

      nodejs = pkgs.nodejs_24;

      package-lock2nix = callPackage inputs.package-lock2nix.lib.package-lock2nix {
        inherit (scopeSelf) nodejs;
        overrideScope = _: _: { };
      };
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
