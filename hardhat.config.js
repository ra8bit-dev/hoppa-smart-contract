require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const key = "YOUR PRIVATE KEY";

module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 40000000000,
      accounts:[key] 
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gas: "auto",
      //gasPrice: 20000000000,
      accounts:[key]
    },
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287, // 0x507 in hex,
      accounts: [key]
    },
    moonriver: {
      url: 'https://moonriver.public.blastapi.io',
      chainId: 1285, // 0x507 in hex,
      accounts: [key]
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      chainId: 137,
      accounts: [key],
      gas: "auto"
    },

    eth: {
      url: "https://eth-mainnet.public.blastapi.io",
      chainId: 1,
      accounts: [key],
      gas: 2100000,
      gasPrice: 8000000000 
      //gasPrice: 50000000000
     // gas: "auto"
    },

    doge: {
      url: 'https://rpc-us.dogechain.dog',
      chainId: 2000,
      accounts: [key],
      gas: "auto"
    },
  },

  etherscan: {
    apiKey: ""   // bnb,matic,eth,moonriver
  },

  solidity: {
  version: "0.7.3",
  settings: {
    optimizer: {
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
