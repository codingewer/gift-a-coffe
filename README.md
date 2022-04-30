# Guess My Number (1 - 10) as a NEAR contract

## Install dependencies

```
yarn
```

## Build and Deploy the contract

```
yarn build
near dev-deploy ./out/main.wasm
```

## How to  work

1. a coffee is created
2. Coffee is gifted to coffee

## Run the game

**Create a coffe**

```
near call <contract-id> create '{"message":"<message here>"}' --accountId <accoun_id>
```

**Gift a coffe**

```
near call <contract-id>  gift '{"id": <coffe id>"}' --account_id <accoun_id> --amount 1
```

**Get the coffes**

```
near view <contract-id>  get '{"offset":"<offset here>", "limit":"<limit here>"}' --accountId <accoun_id>
```

**Get the coffe**

```
near view <contract-id>  getById '{"id":"<coffe id>"}' --accountId <accoun_id>
```

**Delete the coffe**

```
near call <contract-id> del '{"id":"<coffe id>" }' --accountId <accoun_id>
```

---