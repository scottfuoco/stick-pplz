import { useEthers } from '@usedapp/core';
import { toast } from 'react-toastify';
import { whitelistMint } from '@/src/contract/interact';
import { useMint } from '../../hooks/useMint';
import { usePublicContractData } from '../../hooks/usePublicContractData';
import { Button } from './Button';

export const MintButton = ({ amount }) => {
  const { account } = useEthers();

  const { data, error, isLoading: isLoadingPublicData } = usePublicContractData();

  const { mutate: mint, isLoading: isLoadingMint } = useMint();

  const isLoading = isLoadingPublicData || isLoadingMint;
  const { cost, whitelistMintEnabled } = data;

  const handleMint = () => {
    if (!account) {
      toast.error('Connect your wallet!', { position: 'top-left' });
      return;
    }
    if (whitelistMintEnabled) {
      whitelistMint({ amount, cost: cost * amount, account });
      return;
    }
    mint({ amount, cost: cost * amount, account });
  };

  let text = 'MINT!';
  if (whitelistMintEnabled) {
    text = 'WHITELIST MINT!';
  }

  return <Button type="button" isLoading={isLoading} onClick={handleMint}>{text}</Button>;
};
