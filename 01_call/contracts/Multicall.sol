// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract MultiCall {
    struct Call {
        address targetAddress;
        bytes callData;
    }

    constructor(){}

    function multicall(Call[] memory calls) public {
        for (uint256 i = 0; i < calls.length; i++) {
            (bool success, ) = calls[i].targetAddress.call(calls[i].callData);
            require(success, "call failed");
        }
    }
}

contract ContractA {
    uint256 public data;

    constructor() {
        data = 10;
    }

    function setDataA(uint256 _data) public {
        data = _data;
    }

    function getDataA() public view returns (uint256) {
        return data;
    }
}

contract ContractB {
    uint256 public data;

    constructor() {
        data = 10;
    }

    function setDataB(uint256 _data) public {
        data = _data;
    }

    function getDataB() public view returns (uint256) {
        return data;
    }
}

contract MultiCallRun {
    MultiCall public multicall;

    constructor(address _multicall) {
        multicall = MultiCall(_multicall);
    }

    function runCall(address targetA, address targetB) public {
        MultiCall.Call[] memory calls = new MultiCall.Call[](2);
        
        uint256 _data = 101; 

        calls[0] = MultiCall.Call({
            targetAddress: targetA,
            callData: abi.encodeWithSignature("setDataA(uint256)", _data)
        });


        calls[1] = MultiCall.Call({
            targetAddress: targetB,
            callData: abi.encodeWithSignature("setDataB(uint256)", _data)
        });

        multicall.multicall(calls);
    }

}

