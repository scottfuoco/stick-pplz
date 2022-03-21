import { useCalls } from '@usedapp/core';
import { utils } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { CONTRACT_ADDRESS } from '@/src/config';

import abi from '@/src/contract/StickPplNFTzAbi.json';

function usePublicContractData() {
  const variables = ['cost', 'totalSupply', 'maxMintAmountPerTx', 'paused', 'whitelistMintEnabled', 'revealed'];

  const stickPplzInterface = new utils.Interface(abi);

  const calls = variables?.map((variable) => ({
    contract: new Contract(CONTRACT_ADDRESS, stickPplzInterface),
    method: variable,
    args: [],
  })) ?? [];
  console.log({ calls });

  const results = useCalls(calls) ?? [];
  results.forEach((result, idx) => {
    if (result && result.error) {
      console.error(`Error encountered calling 'totalSupply' on ${calls[idx]?.contract.address}: ${result.error.message}`);
    }
  });
  return results.map((result) => result);
}

export { usePublicContractData };
