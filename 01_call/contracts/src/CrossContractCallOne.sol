// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "../interface/ICrossContractCallOne.sol";
import "../interface/ICrossContractCall.sol";

contract CrossContractCallOne is ICrossContractCallOne{
    ICrossContractCall public ccCall;

    event ReturnValue(uint256 value);

    constructor(ICrossContractCall _ccCall){
        ccCall = _ccCall;
    }

    function addResult() external returns(uint256){
        uint256 result = ccCall.add2(100, 200);
        emit ReturnValue(result);
        return result;
    }

    function add3() external returns(uint256) {
        uint256 result = ccCall.add3(1, 2, 3);
        emit ReturnValue(result);
        return result;
    }
}
