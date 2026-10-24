{
  lib,
  stdenv,
  fetchurl,
  versionCheckHook,
}:

let
  version = "20261017-c0f64a03";

  url =
    let
      os = if stdenv.hostPlatform.isDarwin then "darwin" else "linux";
      arch = if stdenv.hostPlatform.isAarch64 then "arm64" else "amd64";
    in
    "https://releases.plaid.com/plaid-cli/releases/${version}/plaid-cli_${version}_${os}_${arch}.tar.gz";

  hashes = {
    x86_64-linux = "sha256-9+xOr6xwEqqCkkKk/UsM3wsXm5GpopnAw8w1BU57NjM=";
    aarch64-linux = "sha256-r2RA1xAQv8rgnEq7IZLvOIZ75SiDUkHnvavFNMtMRo8=";
    x86_64-darwin = "sha256-YtQAjH6EJsPM2XbmyfOr9h9IwRT3x3Fm7jf1wwyyKbU=";
    aarch64-darwin = "sha256-J14qouHBRt2WNSZicp8dyrNkUkk+s4oFdiSuHiirIlU=";
  };
in
stdenv.mkDerivation (finalAttrs: {
  pname = "plaid";
  inherit version;

  strictDeps = true;
  __structuredAttrs = true;

  src = fetchurl {
    inherit url;
    hash = hashes.${stdenv.hostPlatform.system} or (throw "Unsupported system: ${stdenv.hostPlatform.system}");
  };

  unpackPhase = ''
    runHook preUnpack

    tar -xzf $src

    runHook postUnpack
  '';

  installPhase = ''
    runHook preInstall

    install -Dm755 plaid $out/bin/plaid

    runHook postInstall
  '';

  nativeInstallCheckInputs = [ versionCheckHook ];
  versionCheckProgramArg = "--version";
  doInstallCheck = true;

  meta = {
    description = "CLI for the Plaid API";
    homepage = "https://plaid.com/docs/resources/cli";
    license = lib.licenses.unfree;
    maintainers = with lib.maintainers; [ shunueda ];
    platforms = lib.platforms.unix;
    sourceProvenance = with lib.sourceTypes; [ binaryNativeCode ];
    mainProgram = "plaid";
  };
})
