/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    HypercertMinter: {
      address: "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "__SemiFungible1155_init",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "balanceOfBatch",
          inputs: [
            {
              name: "accounts",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "batchBurnFraction",
          inputs: [
            {
              name: "_account",
              type: "address",
              internalType: "address",
            },
            {
              name: "_tokenIDs",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "batchMintClaimsFromAllowlists",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "proofs",
              type: "bytes32[][]",
              internalType: "bytes32[][]",
            },
            {
              name: "claimIDs",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "units",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "burn",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "burnBatch",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "burnFraction",
          inputs: [
            {
              name: "_account",
              type: "address",
              internalType: "address",
            },
            {
              name: "_tokenID",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createAllowlist",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "units",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "merkleRoot",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "_uri",
              type: "string",
              internalType: "string",
            },
            {
              name: "restrictions",
              type: "uint8",
              internalType: "enum IHypercertToken.TransferRestrictions",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMinted",
          inputs: [
            {
              name: "claimID",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "mintedUnits",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "hasBeenClaimed",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isAllowedToClaim",
          inputs: [
            {
              name: "proof",
              type: "bytes32[]",
              internalType: "bytes32[]",
            },
            {
              name: "claimID",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "leaf",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "isAllowed",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isApprovedForAll",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mergeFractions",
          inputs: [
            {
              name: "_account",
              type: "address",
              internalType: "address",
            },
            {
              name: "_fractionIDs",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintClaim",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "units",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_uri",
              type: "string",
              internalType: "string",
            },
            {
              name: "restrictions",
              type: "uint8",
              internalType: "enum IHypercertToken.TransferRestrictions",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintClaimFromAllowlist",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "proof",
              type: "bytes32[]",
              internalType: "bytes32[]",
            },
            {
              name: "claimID",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "units",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintClaimWithFractions",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "units",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "fractions",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "_uri",
              type: "string",
              internalType: "string",
            },
            {
              name: "restrictions",
              type: "uint8",
              internalType: "enum IHypercertToken.TransferRestrictions",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ownerOf",
          inputs: [
            {
              name: "tokenID",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "pause",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "paused",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "readTransferRestriction",
          inputs: [
            {
              name: "tokenID",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeBatchTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "amounts",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "splitFraction",
          inputs: [
            {
              name: "_account",
              type: "address",
              internalType: "address",
            },
            {
              name: "_tokenID",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "_newFractions",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unitsOf",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenID",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "units",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "unpause",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeTo",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "uri",
          inputs: [
            {
              name: "tokenID",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "_uri",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "AdminChanged",
          inputs: [
            {
              name: "previousAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newAdmin",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "AllowlistCreated",
          inputs: [
            {
              name: "tokenID",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "root",
              type: "bytes32",
              indexed: false,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BatchValueTransfer",
          inputs: [
            {
              name: "claimIDs",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "fromTokenIDs",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "toTokenIDs",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BeaconUpgraded",
          inputs: [
            {
              name: "beacon",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ClaimStored",
          inputs: [
            {
              name: "claimID",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "uri",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "totalUnits",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint8",
              indexed: false,
              internalType: "uint8",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "LeafClaimed",
          inputs: [
            {
              name: "tokenID",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "leaf",
              type: "bytes32",
              indexed: false,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Paused",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TransferBatch",
          inputs: [
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TransferSingle",
          inputs: [
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "URI",
          inputs: [
            {
              name: "value",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "id",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Unpaused",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ValueTransfer",
          inputs: [
            {
              name: "claimID",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "fromTokenID",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "toTokenID",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyClaimed",
          inputs: [],
        },
        {
          type: "error",
          name: "ArraySize",
          inputs: [],
        },
        {
          type: "error",
          name: "DoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "DuplicateEntry",
          inputs: [],
        },
        {
          type: "error",
          name: "Invalid",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAllowed",
          inputs: [],
        },
        {
          type: "error",
          name: "NotApprovedOrOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "TransfersNotAllowed",
          inputs: [],
        },
        {
          type: "error",
          name: "TypeMismatch",
          inputs: [],
        },
      ],
      inheritedFunctions: {
        batchBurnFraction:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/interfaces/IHypercertToken.sol",
        burnFraction:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/interfaces/IHypercertToken.sol",
        mergeFractions:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/interfaces/IHypercertToken.sol",
        mintClaim:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/interfaces/IHypercertToken.sol",
        mintClaimWithFractions:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/interfaces/IHypercertToken.sol",
        splitFraction:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/interfaces/IHypercertToken.sol",
        unitsOf:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/interfaces/IHypercertToken.sol",
        uri: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        __SemiFungible1155_init:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        balanceOf: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        balanceOfBatch: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        burn: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        burnBatch: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        isApprovedForAll:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        owner: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        ownerOf: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        proxiableUUID: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        renounceOwnership:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        safeBatchTransferFrom:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        safeTransferFrom:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        setApprovalForAll:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        supportsInterface:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        transferOwnership:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        upgradeTo: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        upgradeToAndCall:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/SemiFungible1155.sol",
        getMinted: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/AllowlistMinter.sol",
        hasBeenClaimed: "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/AllowlistMinter.sol",
        isAllowedToClaim:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/src/protocol/AllowlistMinter.sol",
        paused:
          "/Users/james/code/hyperstaker-mono/lib/hypercerts/contracts/lib/openzeppelin-contracts-upgradeable/contracts/security/PausableUpgradeable.sol",
      },
    },
    HyperStaking: {
      address: "0x610178da211fef7d417bc0e6fed39f05609ad788",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_stakingToken",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC1155BatchReceived",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC1155Received",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakedAmount",
          inputs: [
            {
              name: "user",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "stakes",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "timestamp",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "stakingToken",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract ERC1155Upgradeable",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Unstaked",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "ReentrancyGuardReentrantCall",
          inputs: [],
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
