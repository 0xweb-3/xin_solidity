const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DelegateCaller and TargetContract", (m) => {
  const targetDelegateCallContract = m.contract("TargetDelegateCallContract");
  const delegateCaller = m.contract("DelegateCaller");

  return { targetDelegateCallContract,  delegateCaller};
});
