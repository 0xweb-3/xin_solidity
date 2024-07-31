const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Caller and TargetContract", (m) => {
  const targetContract = m.contract("TargetContract");
  const caller = m.contract("Caller");

  return { targetContract,  caller};
});
