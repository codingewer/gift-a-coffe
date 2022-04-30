#!/usr/bin/env bash
set -e
[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CALLER" ] && echo "Missing \$PLAYER2 environment variable" && exit 1
echo
echo 'About to call say() on the contract'
echo near view $CONTRACT get '{"offset":"$1","limit":"$2"}' --accountId $CALLER
echo
echo \$CONTRACT is $CONTRACT
echo \$1 is [ $1 ] '(offset)'
echo \$2 is [ $2 NEAR ] '(limit)'
echo
near view $CONTRACT get '{"offset":"'"$1"'", "limit":"'"$2"'"}' --accountId $CALLER