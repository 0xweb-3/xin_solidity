const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MultiCall ", (m) => {
  const contractA = m.contract("ContractA");
  const contractB = m.contract("ContractB");
  const multiCall = m.contract("MultiCall");
  const multiCallRun = m.contract("MultiCallRun");



  return { contractA,  contractB, multiCall, multiCallRun};
});
