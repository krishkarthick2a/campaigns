require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: './.env.local' });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
})

const NEXT_PUBLIC_RPC_URL = "https://polygon-mumbai.g.alchemy.com/v2/nc30rgX-LWEyP2TWKcnxXkXpK59j1eaX";
// const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
const privateKey = "674cc3a08b6a146ae0522bba6438bc21e91bf5efea80d63a86e36459a1ea8520";

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "mumbai",
  networks: {
    // mumbai: {},
    mumbai: {
      // url: process.env.NEXT_PUBLIC_RPC_URL,
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [privateKey]
    }
  }
  // namedAccounts: {
  //   deployer: {
  //     default: 0, // here this will by default take the first account as deployer
  //   },
  // },
};

