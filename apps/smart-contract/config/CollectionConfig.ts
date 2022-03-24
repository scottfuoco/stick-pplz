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
    price: 0.0005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.0009,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0xdc9A95d8C4309c12962f34e938f2D1C8a85645A1',
  openSeaSlug: 'stick-ppl',
  whitelistAddresses,
};

export default CollectionConfig;
