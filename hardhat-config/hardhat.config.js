require(\"@nomicfoundation/hardhat-verify\");

module.exports = {
  solidity: \"0.8.20\",
  networks: {
    baseSepolia: {
      url: \"https://sepolia.base.org\",
      accounts: [\"YOUR_PRIVATE_KEY\"]
    }
  }
};
