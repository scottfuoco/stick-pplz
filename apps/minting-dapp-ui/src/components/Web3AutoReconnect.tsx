import { useEthers } from '@usedapp/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { ReactElement, useEffect } from 'react';

const injected = new InjectedConnector({ supportedChainIds: [1, 4, 1337] });

export const Web3AutoReconnect = ({ children }: {children: ReactElement}) => {
  const { activate } = useEthers();

  // TODO: investigate why this doesn't work :'(
  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        // activate(injected);
      }
    });
  }, [activate]);

  return children;
};
