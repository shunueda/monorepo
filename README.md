# Monorepo

Shun's kitchen-sink.

## Configuring the machine

### Darwin

Bootstrap:

```console
sudo nix --extra-experimental-features "nix-command flakes" run nix-darwin -- switch --flake github:shunueda/monorepo#<profile>
```

Initialize password-store

```
git clone git@github.com/shunueda/password-store ~/.password-store
```

Switch:

```console
sudo darwin-rebuild switch --flake .
```

### NixOS

> WIP

1. Enter setup via bootable USB

1. Disko

```console
sudo nix --experimental-features "nix-command flakes" run disko -- --mode destroy,format,mount --flake github:shunueda/monorepo#<profile>
```

1. nixos-install

```console
sudo nixos-install --flake github:shunueda/monorepo#<profile>
```

1. Switch

```console
sudo nixos-rebuild switch --flake .
```
