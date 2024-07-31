// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract TargetDelegateCallContract {
    uint256 public data;

    constructor() {
        data = 10;
    }

    function setData(uint256 _data) public {
        data = _data;
    }
}

contract DelegateCaller {
    uint256 public data;

    function callSetData(address _targetAddress, uint256 _data) public {
        (bool success, ) = _targetAddress.delegatecall(
            abi.encodeWithSignature("setData(uint256)", _data)
        );
        require(success, "");
    }
}