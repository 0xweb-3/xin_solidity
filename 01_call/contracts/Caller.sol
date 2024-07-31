// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract TargetContract {
    uint256 public data;

    constructor() {
        data = 10;
    }

    function setData(uint256 _data) public {
        data = _data;
    }
}

contract Caller {
    function callSetData(address _targetAddress, uint256 _data) public {
        (bool success, bytes memory bytesData) = _targetAddress.call(
            abi.encodeWithSignature("setData(uint256)", _data)
        );
        bytesData;
        require(success, "");
    }
}