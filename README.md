# Gift a Coffe as a NEAR contract ☕

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


The first step is to create a coffee request.

In the second step, the user with the smart contract sends the desired amount of money with the id of the coffee request.


## Run the App

**Create a coffe**

```
near call <contractId> create '{"message":"<message here>"}' --accountId <accountId>
```

**Gift a coffe**

```
near call <contractId>  gift '{"id": <coffe id>"}' --account_id <accountId> --amount 1
```

**Get the coffes**

```
near view <contractId>  get '{"offset":"<offset here>", "limit":"<limit here>"}' --accountId <accountId>
```

**Get the coffe**

```
near view <contractId>  getById '{"id":"<coffe id>"}' --accountId <accounId>
```

**Delete the coffe**

```
near call <contractIdd> del '{"id":"<coffe id>" }' --accountId <accounIdd>
```

---
