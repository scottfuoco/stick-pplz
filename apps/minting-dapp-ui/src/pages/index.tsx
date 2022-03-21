import { useEffect, useState } from 'react';
import { useEthers } from '@usedapp/core';
import { Web3ModalButton } from '../components/Web3ModalButton';

import { getPublicVariables } from '../contract/interact';
import { usePublicContractData } from '../hooks/usePublicContractData';
import { signInMessage } from '../contract/signin';

export default function Web() {
  const [publicVariables, setPublicVariables] = useState(null);
  // const value = usePublicContractData();

  return (
    <div>
      <h1>MINTING DAPP WIP!</h1>
      <Web3ModalButton />
    </div>
  );
}
