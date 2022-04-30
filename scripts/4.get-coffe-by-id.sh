#!/usr/bin/env bash
set -e
[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CALLER" ] && echo "Missing \$PLAYER2 environment variable" && exit 1

echo
echo 'About to call say() on the contract'
echo near view $CONTRACT getById '{"id":"$1"}' --accountId $CALLER
echo
echo \$CONTRACT is $CONTRACT
echo
near view $CONTRACT getById '{"id":"'"$1"'"}' --accountId $CALLER