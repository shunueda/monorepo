#!/usr/bin/env bash

tmp=$(mktemp -d)

trap 'rm -rf $tmp' EXIT

export GH_CONFIG_DIR=$tmp

gh auth login --web --insecure-storage --git-protocol ssh --skip-ssh-key --clipboard

token=$(gh auth token)

<<<"$token" pass insert -mf "ApiKeys/GH_TOKEN"
