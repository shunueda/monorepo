# Monorepo

Shun's kitchen-sink.

## Configuring the machine

Bootstrap:

```console
sudo nix --extra-experimental-features "nix-command flakes" run nix-darwin -- switch --flake github:shunueda/monorepo#<profile>
```

Initialize password-store

```
git clone git@git.sr.ht:~ueda/password-store ~/.password-store
```

Switch:

```console
sudo darwin-rebuild switch --flake .
```
