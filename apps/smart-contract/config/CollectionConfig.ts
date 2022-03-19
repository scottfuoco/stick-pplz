import CollectionConfigInterface from '../types/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'StickPplNFTz',
  tokenName: 'Stick Ppl',
  tokenSymbol: 'SPPL',
  hiddenMetadataUri: 'ipfs://QmazQUoHS2wvFdfPDCh1kyZWEh8wsmuSatoTE5RtBU4NCx',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0x11621Ff7644c5fC9c2c969c436bB1F693b40a84e',
  openSeaSlug: 'stick-ppl',
  whitelistAddresses,
};

export default CollectionConfig;
