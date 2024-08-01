const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("CrossContract and CrossContractCallOne", function () {
  async function deployCrossContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const CrossContractCall = await ethers.getContractFactory("CrossContractCall");
    const crossContractCall = await CrossContractCall.deploy();

    const CrossContractCallOne = await ethers.getContractFactory("CrossContractCallOne");
    const crossContractCallOne = await CrossContractCallOne.deploy(crossContractCall);

    return { crossContractCall, crossContractCallOne, owner, otherAccount };
  }

  describe("CrossContractCallOne test script", function () {
    it("CrossContractCallOne test", async function () {
      const { crossContractCall, crossContractCallOne, owner, otherAccount  } = await loadFixture(deployCrossContract);
      
      // todo 补充测试

    });
  });

});
