# Monorepo

Shun's kitchen-sink.

## Configuring the machine

Bootstrap:

```console
sudo nix --extra-experimental-features "nix-command flakes" run nix-darwin -- switch --flake sourcehut:~ueda/monorepo#personal
```

```console
sudo nix --extra-experimental-features "nix-command flakes" run nix-darwin -- switch --flake .#personal
```
