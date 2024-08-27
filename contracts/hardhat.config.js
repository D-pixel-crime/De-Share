// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//   },
//   paths: {
//     artifacts: "./client/src/artifacts",
//   },
// };

require("@nomicfoundation/hardhat-toolbox");
// require('dotenv').config();

const API_URL = `https://eth-sepolia.g.alchemy.com/v2/t1A6C28AM4k8bU5Z-OXai-NfZHMnr4k1`;

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: ["7f3963b0777e3275ea5f67eadd8088c63df65472912ebfe29cb5e25930a18e25"]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  paths: {
        artifacts: "../client/myapp/src",
      },

};
