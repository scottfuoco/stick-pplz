import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { ethers } from 'ethers';
import { useMutation, useQuery } from 'react-query';
import { config } from '@/src/config';
import abi from './StickPplNFTzAbi.json';

const web3 = createAlchemyWeb3(config.RPC_URL);
const nftContract = new web3.eth.Contract(abi, config.TOKEN_CONTACT_ADDRESS);

export const getPublicVariables = async () => {
  const publicVariableData = [
    { variable: 'cost', contractCall: nftContract.methods.cost().call() },
    { variable: 'totalSupply', contractCall: nftContract.methods.totalSupply().call() },
    { variable: 'maxSupply', contractCall: nftContract.methods.maxSupply().call() },
    { variable: 'maxMintAmountPerTx', contractCall: nftContract.methods.maxMintAmountPerTx().call() },
    { variable: 'paused', contractCall: nftContract.methods.paused().call() },
    { variable: 'whitelistMintEnabled', contractCall: nftContract.methods.whitelistMintEnabled().call() },
    { variable: 'revealed', contractCall: nftContract.methods.revealed().call() },
  ];

  const promises = publicVariableData.map(({ contractCall }) => contractCall);

  const contractValues = await Promise.all(promises);

  const variables = {};
  contractValues.forEach((contractValue, i) => {
    variables[publicVariableData[i].variable] = contractValue;
  });

  return variables;
};

export const mint = async ({ amount, cost, account }) => {
  console.log({ amount, cost, account });
  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: 'To be able to mint, you need to connect your wallet',
    };
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  try {
    // Interact with contract
    const contract = new ethers.Contract(config.TOKEN_CONTACT_ADDRESS, abi, signer);
    const totalPrice = cost;
    const transaction = await contract.mint(amount, { value: ethers.utils.parseUnits(totalPrice.toString(), 'wei') });
    const data = await transaction.wait();
    console.log({ transaction });
    console.log({ data });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export function useMint() {
  return useMutation(({ amount, cost, account }) => postMint({ amount, cost, account }), {

    onSettled: (data, error, cardId) => {
    },
    onError: async (err, cardId, context) => {
      console.log({ err });
      alert('error minting');
    },
    onSuccess: async (err, cardId, context) => {
      alert('success minting');
    },
  });
}

export const postMint2 = async ({ amount: mintAmount, cost, account }) => {
  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: 'To be able to mint, you need to connect your wallet',
    };
  }

  const nonce = await web3.eth.getTransactionCount(
    window.ethereum.selectedAddress,
    'latest',
  );
  // console.log({ nonce });
  // console.log({ data: window.ethereum.selectedAddress });
  // const gas = (300000 * mintAmount).toString();
  // const value = parseInt(
  //   web3.utils.toWei(String(cost * mintAmount), 'ether'),
  // ).toString(16);
  // console.log('🚀 ~ file: interact.tsx ~ line 59 ~ postMint ~ value', value);

  // Set up our Ethereum transaction
  const tx = {
    to: config.TOKEN_CONTACT_ADDRESS,
    from: window.ethereum.selectedAddress,
    value: parseInt(
      web3.utils.toWei(String(cost * mintAmount), 'wei'),
    ).toString(16), // hex
    gas: String(300000 * mintAmount),
    data: nftContract.methods.mint(mintAmount).encodeABI(),
    nonce: nonce.toString(16),
  };

  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx],
    });
    console.log({ txHash });

    return {
      success: true,
      status: (
        <a href={`https://rinkeby.etherscan.io/tx/${txHash}`} target="_blank" rel="noreferrer">
          <p>✅ Check out your transaction on Etherscan:</p>
          <p>{`https://rinkeby.etherscan.io/tx/${txHash}`}</p>
        </a>
      ),
    };
  } catch (error) {
    console.log({ error });
    return {
      success: false,
      status: `😞 Smth went wrong:${error.message}`,
    };
  }
};
