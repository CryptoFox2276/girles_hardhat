require("@nomicfoundation/hardhat-toolbox");

const API_KEY = "oDIBAyBOjmEwFFcBL35QA4rWYAfIfzIW";
const PRIVATE_KEY = "6908da20c67046a88f437ff4f2b486c8622b95d9402a69721e376b4be93a329c";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  }
};
