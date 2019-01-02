// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "poem help rate boat upset candy squirrel pause van produce merit bone neither mouse hockey";
var privateKey = [
  "25ce5adba550c10888232d686544dad9a4dfac0607afa2e8a6930f7fac012deb"
];


module.exports = {
    networks: {
        ganache: {
          host: '127.0.0.1',
          port: 7545,
          network_id: '*'
        },
        ropsten: {
          provider: function() {
            return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/707dee4a3c634e1cb5511fc131ecefe1")
          },
          network_id: 3
        }
    }
};
