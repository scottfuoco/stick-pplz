import { useEthers } from '@usedapp/core';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { whitelistMint } from '@/src/contract/interact';
import { useMint } from '../../hooks/useMint';
import { usePublicContractData } from '../../hooks/usePublicContractData';
import { Button } from './Button';

export const MintButton = ({ amount }) => {
  const { account } = useEthers();
  const [error, setError] = useState(false);

  const { data, error: publicDataError, isLoading: isLoadingPublicData } = usePublicContractData();

  const { mutate: mint, isLoading: isLoadingMint } = useMint();

  const isLoading = isLoadingPublicData || isLoadingMint;
  const { cost, whitelistMintEnabled } = data;

  const handleMint = () => {
    if (!account) {
      toast.error('Connect your wallet!', { position: 'top-left' });
      return;
    }
    if (whitelistMintEnabled) {
      whitelistMint({
        amount, cost: cost * amount, account, setError,
      });
      return;
    }
    mint({
      amount, cost: cost * amount, account, setError,
    });
  };

  let text = 'MINT!';
  if (whitelistMintEnabled) {
    text = 'WHITELIST MINT!';
  }

  return (
    <>
      {error && <div className="text-center text-red-600 bg-gray-600">Yo you already minted your whitelist NFT!</div>}
      <Button type="button" isLoading={isLoading} onClick={handleMint}>{text}</Button>
    </>
  );
};
