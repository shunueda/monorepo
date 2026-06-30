{
  inputs,
  flake-parts-lib,
  config,
  ...
}:
{
  options.perSystem = flake-parts-lib.mkPerSystemOption (
    {
      pkgs,
      lib,
      system,
      ...
    }:
    {
      options.ueda.scope = lib.mkOption { type = lib.types.raw; };
      config =
        let
          uedaScope = pkgs.callPackage ../ueda-scope.nix {
            inherit inputs;
            inherit (config) constants;
          };
          availableOnSystem = lib.meta.availableOn { inherit system; };
        in
        {
          ueda.scope = uedaScope;
          packages = lib.filterAttrs (_: v: lib.isDerivation v && availableOnSystem v) uedaScope;
        };
    }
  );
}
