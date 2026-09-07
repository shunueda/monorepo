{
  python3,
  writeShellApplication,
  emacsPackages,
}:
writeShellApplication {
  name = "elisp-autofmt";
  runtimeInputs = [ python3 ];
  text = ''
    dir=(${emacsPackages.elisp-autofmt}/share/emacs/site-lisp/elpa/elisp-autofmt-*)

    python3 "''${dir[0]}/elisp-autofmt.py" \
      --fmt-style fixed \
      --fmt-defs-dir "''${dir[0]}" \
      --fmt-defs elisp-autofmt.overrides.json \
      "$@"
  '';
}
