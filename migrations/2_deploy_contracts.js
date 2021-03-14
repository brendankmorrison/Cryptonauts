const cryptonauts = artifacts.require("./cryptonauts.sol");

module.exports = function (deployer) {
  deployer.deploy(cryptonauts);
};