// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "../interface/ICrossContractCall.sol";

contract CrossContractCall is ICrossContractCall {
    uint256 public result;

    constructor() {
        result = 0;
    }

    function add2(uint256 val1, uint256 val2) external returns(uint256){
        result = val1 + val2;
        return result;
    }

    function add3(uint256 val1, uint256 val2, uint256 val3) external returns(uint256){
          result = val1 + val2 + val3;
          return result;
    }
}
