import * as dotenv from 'dotenv';

import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import CollectionConfig from './config/CollectionConfig';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task('generate-root-hash', 'Generates and prints out the root hash for the current whitelist', async () => {
  // Check configuration
  if (CollectionConfig.whitelistAddresses.length < 1) {
    throw 'The whitelist is empty, please add some addresses to the configuration.';
  }

  // Build the Merkle Tree
  const leafNodes = CollectionConfig.whitelistAddresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const rootHash = `0x${merkleTree.getRoot().toString('hex')}`;

  console.log(`The Merkle Tree root hash for the current whitelist is: ${rootHash}`);
});

task('generate-proof', 'Generates and prints out the whitelist proof for the given address (compatible with block explorers such as Etherscan)', async (taskArgs: { address: string }) => {
  // Check configuration
  if (CollectionConfig.whitelistAddresses.length < 1) {
    throw 'The whitelist is empty, please add some addresses to the configuration.';
  }

  // Build the Merkle Tree
  const leafNodes = CollectionConfig.whitelistAddresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const proof = merkleTree.getHexProof(keccak256(taskArgs.address)).toString().replace(/'/g, '').replace(/ /g, '');

  console.log(`The whitelist proof for the given address is: ${proof}`);
})
  .addPositionalParam('address', 'The public address');

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  defaultNetwork: 'rinkeby',
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
