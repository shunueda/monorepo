#!/usr/bin/env bash

set -euo pipefail

tmp=$(mktemp -d)

trap 'rm -rf $tmp' EXIT

export GH_CONFIG_DIR=$tmp

# --insecure-storage stores the token as plaintext in GH_CONFIG_DIR instead
# of the native keychain. I don't want to pollute the global state, and the
# token is persisted in pass.
gh auth login \
   --web \
   --insecure-storage \
   --git-protocol ssh \
   --skip-ssh-key \
   --scopes admin:public_key,admin:gpg_key,notifications \
   --clipboard

token=$(gh auth token)

<<<"$token" pass insert -mf "ApiKeys/GITHUB_TOKEN"
