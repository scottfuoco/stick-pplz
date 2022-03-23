import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DAppProvider, Config } from '@usedapp/core';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { Web3AutoReconnect } from '@/components/Web3AutoReconnect';
import { config } from '@/src/config';

import '@/src/styles/globals.scss';
import '@/src/styles/forms.scss';

const dappConfig: Config = {
  readOnlyChainId: config.NETWORK_ID,
  readOnlyUrls: {
    [config.NETWORK_ID]: config.RPC_URL,
  },

};

const queryClient = new QueryClient();
const App = ({ Component, pageProps }: AppProps) => {
  if (typeof window !== 'undefined') {
    injectStyle();
  }

  return (
    <DAppProvider config={dappConfig}>
      <QueryClientProvider client={queryClient}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Web3AutoReconnect>
          <Component {...pageProps} />
        </Web3AutoReconnect>

        <ToastContainer />
      </QueryClientProvider>
    </DAppProvider>
  );
};

export default App;
