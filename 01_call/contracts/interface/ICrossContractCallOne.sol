// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

interface ICrossContractCallOne {
    function addResult() external returns (uint256);
    function add3() external returns (uint256);
}