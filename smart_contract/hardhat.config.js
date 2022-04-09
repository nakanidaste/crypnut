//https://eth-ropsten.alchemyapi.io/v2/qyjZDVGUiYoJ5wpwO6W00CwcuRskx0qD

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/qyjZDVGUiYoJ5wpwO6W00CwcuRskx0qD",
      accounts: [
        "f81720f58b8d13a501dd71150c55a43f2b2cb9c9c3e3949e19b890455a7eb89a",
      ],
    },
  },
};
