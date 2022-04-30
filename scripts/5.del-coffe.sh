#!/usr/bin/env bash
set -e
[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$RECIEVER" ] && echo "Missing \$PLAYER1 environment variable" && exit 1

echo
echo 'About to call create() on the contract'
echo near call $CONTRACT del '{"id":"$1" }' --accountId $RECIEVER
echo
echo \$CONTRACT is $CONTRACT
echo \$RECIEVER is $RECIEVER
echo
near call $CONTRACT del '{"id":"'"$1"'" }' --accountId $RECIEVER
