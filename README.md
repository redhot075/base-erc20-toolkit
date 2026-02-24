# ERC20 Toolkit for Base L2

## Quick Deploy
1. yarn init -y
2. npx hardhat init
3. forge install OpenZeppelin/openzeppelin-contracts

Deploy: yarn hardhat run scripts/deploy.js --network base-sepolia

## Verify Contract
yarn hardhat verify --network base-sepolia DEPLOYED_CONTRACT_ADDRESS
## Verification

1. Build: `npx hardhat compile`
2. Deploy: `npx hardhat run scripts/deploy.js --network baseSepolia`
3. Verify: Etherscan Base Sepolia (paste tx hash)

Scripts/deploy.js:
```js
const hre = require("hardhat");

async function main() {
  const BaseToken = await hre.ethers.getContractFactory("BaseToken");
  const baseToken = await BaseToken.deploy();
  await baseToken.waitForDeployment();
  console.log("BaseToken deployed to:", await baseToken.getAddress());
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```
