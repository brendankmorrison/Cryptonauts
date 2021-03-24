const Cryptonaut = artifacts.require("Cryptonaut");

module.exports = function (deployer) {
  deployer.deploy(Cryptonaut);
};