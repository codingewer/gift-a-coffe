
  
#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$SENDER" ] && echo "Missing \$SENDER environment variable" && exit 1

echo
echo 'About to call say() on the contract'
echo near call $CONTRACT gift '{"id": "'"$1"'"}' --account_id $SENDER 
echo
echo \$CONTRACT is $CONTRACT
echo \$PLAYER2 is $PLAYER2
echo \$1 is [ $1 ] '(coffe id)'
echo
near call $CONTRACT gift '{"id": "'"$1"'"}' --account_id $SENDER