import React, { useEffect, useState } from 'react';
import { useEthers } from '@usedapp/core';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { signInMessage } from '../contract/signin';

export const Web3ModalButton = () => {
  const {
    account, library, activate, deactivate,
  } = useEthers();
  const [activateError, setActivateError] = useState('');
  const { error } = useEthers();

  useEffect(() => {
    if (error) {
      setActivateError(error.message);
    }
  }, [error]);

  const activateProvider = async () => {
    const providerOptions = {
      injected: {
        display: {
          name: 'Metamask',
          description: 'Connect with the provider in your Browser',
        },
        package: null,
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          bridge: 'https://bridge.walletconnect.org',
        },
      },
    };

    const web3Modal = new Web3Modal({
      providerOptions,
    });
    try {
      const provider = await web3Modal.connect();
      await activate(provider);
      setActivateError('');
    } catch (error: any) {
      setActivateError(error.message);
    }
  };

  useEffect(() => {
    async function signin() {
      if (account && account !== null) {
        const signer = library?.getSigner();
        const message = await signer?.signMessage(signInMessage({ nonce: '1', wallet: account }));
        console.log({ message });
      }
    }
    if (account) {
      signin();
    }
  }, [account]);
  return (
    <div>
      <p>{activateError}</p>
      {account ? (
        <button type="button" onClick={() => deactivate()}>Disconnect</button>
      ) : (
        <button type="button" onClick={() => activateProvider()}>Connect</button>
      )}
    </div>
  );
};
