import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { config } from '@/src/config';
import abi from './StickPplNFTzAbi.json';

const web3 = createAlchemyWeb3(config.RPC_URL);
const nftContract = new web3.eth.Contract(abi, config.TOKEN_CONTACT_ADDRESS);

export const getPublicVariables = async () => {
  const publicVariableData = [
    { variable: 'cost', contractCall: nftContract.methods.cost().call() },
    { variable: 'totalSupply', contractCall: nftContract.methods.totalSupply().call() },
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
