import { useEthers } from '@usedapp/core';
import { toast } from 'react-toastify';
import { useMint } from '../../hooks/useMint';
import { usePublicContractData } from '../../hooks/usePublicContractData';
import { Button } from './Button';

export const MintButton = ({ amount }) => {
  const { account } = useEthers();

  const { data, error, isLoading: isLoadingPublicData } = usePublicContractData();

  const { mutate: mint, isLoading: isLoadingMint } = useMint();

  const isLoading = isLoadingPublicData || isLoadingMint;

  const handleMint = () => {
    if (!account) {
      toast.error('Connect your wallet!', { position: 'top-left' });
      return;
    }
    const { cost } = data;
    mint({ amount, cost: cost * amount, account });
  };

  return <Button type="button" isLoading={isLoading} onClick={handleMint}>MINT!</Button>;
};
