const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("TargetDelegateCallContract and DelegateCaller", function () {
  async function deployDelegateCaller() {
    const [owner, otherAccount] = await ethers.getSigners();

    const TargetDelegateCallContract = await ethers.getContractFactory("TargetDelegateCallContract");
    const targetDelegateCallContract = await TargetDelegateCallContract.deploy();

    const DelegateCaller = await ethers.getContractFactory("DelegateCaller");
    const delegateCaller = await DelegateCaller.deploy();

    return { targetDelegateCallContract, delegateCaller, owner, otherAccount };
  }

  describe("TargetDelegateCallContract and DelegateCaller test script", function () {
    it("Should set the right unlockTime", async function () {
      const { targetDelegateCallContract, delegateCaller, owner, otherAccount  } = await loadFixture(deployDelegateCaller);
      let data = await delegateCaller.data()
      console.log("修改前", data)

      await delegateCaller.callSetData(targetDelegateCallContract, 100)

      data = await delegateCaller.data()
      console.log("修改后", data)
    });
  });

});
