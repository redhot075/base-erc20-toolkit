# Base ERC20 Toolkit

ERC20 token starter for Base L2 (Sepolia/Mainnet). Deploy + mint tokens.

## Quick Start

1. **Install:**
   ```
   npm init -y
   npm i hardhat @nomicfoundation/hardhat-toolbox @openzeppelin/contracts
   ```

2. **Config:** Edit `hardhat-config/hardhat.config.js` (private key).

3. **Deploy:**
   ```
   npx hardhat run scripts/deploy.js --network baseSepolia
   ```

## Guide

### Deploy
- Compile: `npx hardhat compile`
- Deploy: `npx hardhat run scripts/deploy.js --network baseSepolia`
- Verify: Base Sepolia explorer.

### Contract
- `BaseToken.sol`: ERC20 with mint.

**Base ready!** 🚀
