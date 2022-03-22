import { useEthers } from '@usedapp/core';
import { useMint } from '../../hooks/useMint';
import { usePublicContractData } from '../../hooks/usePublicContractData';
import { Button } from './Button';

export const MintButton = () => {
  const { account } = useEthers();

  const { data, error, isLoading: isLoadingPublicData } = usePublicContractData();

  const { mutate: mint, isLoading: isLoadingMint } = useMint();

  const isLoading = isLoadingPublicData || isLoadingMint;

  const handleMint = () => {
    if (!account) {
      alert('Login');
    }
    const { cost } = data;
    mint({ amount: 1, cost, account });
  };

  return <Button type="button" isLoading={isLoading} onClick={handleMint}>MINT!</Button>;
};
