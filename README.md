# Monorepo

Shun's kitchen-sink.

## Configuring the machine

Bootstrap:

```console
sudo nix --extra-experimental-features "nix-command flakes" run nix-darwin -- switch --flake sourcehut:~ueda/monorepo#personal
```

Initialize password-store

```
git clone git@git.sr.ht:~ueda/password-store ~/.password-store
```

Switch:

```console
sudo nix --extra-experimental-features "nix-command flakes" run nix-darwin -- switch --flake .#personal
```
