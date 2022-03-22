// The name below ("StickPplNFTz") should match the name of your Solidity contract.
// It can be updated using the following command:
// yarn rename-contract NEW_CONTRACT_NAME
// Please DO NOT change it manually!
import { ethers } from 'hardhat';
import { StickPplNFTz as ContractType } from '../typechain-types';

import CollectionConfig from '../config/CollectionConfig';

export async function getContract(): Promise<ContractType> {
  const { contractName, contractAddress } = CollectionConfig;

  // Check configuration
  if (CollectionConfig.contractAddress === null) {
    throw (
      '\x1b[31merror\x1b[0m '
      + 'Please add the contract address to the configuration before running this command.'
    );
  }
  const contractCode = await ethers.provider.getCode(contractAddress);

  if (contractCode === '0x') {
    throw (
      '\x1b[31merror\x1b[0m '
      + `Can't find a contract deployed to the target address: ${contractAddress}`
    );
  }

  const contract = await ethers.getContractAt(
    contractName,
    contractAddress,
  ) as ContractType;

  return contract;
}

export type NftContractType = ContractType;
