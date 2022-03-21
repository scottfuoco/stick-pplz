import { useEthers } from '@usedapp/core';

export const MintButton = () => {
  const {
    account,
  } = useEthers();

  const mint = () => {
    if (!account) {
      alert('Login');
    }
  };

  return <button type="button" onClick={mint}>MINT</button>;
};
