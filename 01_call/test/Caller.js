const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("TargetContract and Caller", function () {
  async function deployCaller() {
    const [owner, otherAccount] = await ethers.getSigners();

    const TargetContract = await ethers.getContractFactory("TargetContract");
    const targetContract = await TargetContract.deploy();

    const Caller = await ethers.getContractFactory("Caller");
    const caller = await Caller.deploy();

    return { targetContract, caller, owner, otherAccount };
  }

  describe("TargetContract and Caller test script", function () {
    it("Should set the right unlockTime", async function () {
      const { targetContract, caller, owner, otherAccount  } = await loadFixture(deployCaller);
      let data = await targetContract.data()
      console.log("修改前", data)

      await caller.callSetData(targetContract, 100)

      data = await targetContract.data()
      console.log("修改后", data)
    });
  });

});
