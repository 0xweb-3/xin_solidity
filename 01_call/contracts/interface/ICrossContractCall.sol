// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

interface ICrossContractCall {
    function add2(uint256 val1, uint256 val2) external returns(uint256);
    function add3(uint256 val1, uint256 val2, uint256 val3) external returns(uint256);
}