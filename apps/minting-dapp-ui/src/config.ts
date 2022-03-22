// TODO: crash on missing env vars
export const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL ?? '';
export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? '';

export const SHOW_DEBUG_INFO = true;

type NetworkConfig = {
  RPC_URL: string;
  TOKEN_CONTACT_ADDRESS: string;
  NETWORK_ID: number;
}

export const networkConfig = {
  rinkeby: {
    RPC_URL: 'https://eth-rinkeby.alchemyapi.io/v2/2BNHY6CtkfuZRPxAzrIentCl2Q7KuOvV',
    TOKEN_CONTACT_ADDRESS: '0xdc9A95d8C4309c12962f34e938f2D1C8a85645A1',
    NETWORK_ID: 4,
  },
};

const NETWORK: string = process.env.NEXT_PUBLIC_NETWORK ?? 'rinkeby';

export const config: NetworkConfig = networkConfig[NETWORK];
