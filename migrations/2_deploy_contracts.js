const cryptonauts = artifacts.require("cryptonauts");

module.exports = function (deployer) {
  deployer.deploy(cryptonauts);
};