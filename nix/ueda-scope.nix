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

  uedaTfProviders = with tfProviders; [
    wombelix.sourcehut
    integrations.github
  ];
in
lib.makeScope pkgs.newScope (
  scopeSelf:
  let
    inherit (scopeSelf) callPackage;
  in
  {
    inherit inputs uedaTfProviders;

    inherit (inputs.tools.packages.${system}) nix-flake-check-changed nix-grep-to-build;

    terraform = pkgs.terraform.withPlugins (_: uedaTfProviders);

    nodejs = pkgs.nodejs_24;

    sopsWrapper = callPackage ./sops-wrapper.nix { };

    package-lock2nix = callPackage inputs.package-lock2nix.lib.package-lock2nix {
      inherit (scopeSelf) nodejs;
      overrideScope = _: _: { };
    };
  }
  // lib.packagesFromDirectoryRecursive {
    inherit callPackage;
    directory = ../packages;
  }
)
