const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("MultiCallRun test", function () {
  async function deployMultiCall() {
    const [owner, otherAccount] = await ethers.getSigners();

    const ContractA = await ethers.getContractFactory("ContractA");
    const contractA = await ContractA.deploy();

    const ContractB = await ethers.getContractFactory("ContractB");
    const contractB = await ContractB.deploy();

    const MultiCall = await ethers.getContractFactory("MultiCall");
    const multiCall = await MultiCall.deploy();

    const MultiCallRun = await ethers.getContractFactory("MultiCallRun");
    const multiCallRun = await MultiCallRun.deploy(multiCall);

    return { contractA, contractB, multiCall, multiCallRun, owner, otherAccount };
  }

  describe("run MultiCallRun", function () {
    it("Multi call test", async function () {
      const { contractA, contractB, multiCall, multiCallRun, owner, otherAccount   } = await loadFixture(deployMultiCall);

      await multiCallRun.runCall(contractA, contractB)

      const dataA = await contractA.data()
      console.log(dataA)

      const dataB = await contractB.data()
      console.log(dataB)
    });
  });

});
