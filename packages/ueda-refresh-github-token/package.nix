{ writeShellApplication, gh }:
writeShellApplication {
  name = "ueda-refresh-github-token";
  runtimeInputs = [ gh ];
  text = builtins.readFile ./ueda-refresh-github-token.sh;
}
