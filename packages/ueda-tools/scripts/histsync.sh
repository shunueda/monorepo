#!/usr/bin/env bash

history -a

passentry="ShellHistories/$HOSTNAME"

(cat "$HISTFILE" 2>/dev/null; pass show "$passentry" 2>/dev/null) |
  awk '!a[$0]++' |
  sponge "$HISTFILE"

<"$HISTFILE" pass insert -mf "$passentry"

history -c
history -r
