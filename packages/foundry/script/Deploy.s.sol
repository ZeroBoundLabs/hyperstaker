//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../contracts/HyperStaking.sol";
import {HypercertMinter} from "hypercerts-contracts/HypercertMinter.sol";
import "./DeployHelpers.s.sol";

contract DeployScript is ScaffoldETHDeploy {
    error InvalidPrivateKey(string);

    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);

        HypercertMinter hyperCertContract = new HypercertMinter();
        HyperStaking hyperStaking = new HyperStaking(
            address(hyperCertContract)
        );
        console.logString(
            string.concat(
                "HyperCert deployed at: ",
                vm.toString(address(hyperCertContract))
            )
        );
        console.logString(
            string.concat(
                "HyperStaking deployed at: ",
                vm.toString(address(hyperStaking))
            )
        );

        vm.stopBroadcast();

        /**
         * This function generates the file containing the contracts Abi definitions.
         * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
         * This function should be called last.
         */
        exportDeployments();
    }

    function test() public {}
}
