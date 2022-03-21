import { AppProps } from 'next/app';
import '@/src/styles/globals.css';
import {
  DAppProvider,
  Config,
} from '@usedapp/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { config } from '@/src/config';

const dappConfig: Config = {
  readOnlyChainId: config.NETWORK_ID,
  readOnlyUrls: {
    [config.NETWORK_ID]: config.RPC_URL,
  },

};

const queryClient = new QueryClient();
const App = ({ Component, pageProps }: AppProps) => (
  <DAppProvider config={dappConfig}>
    <QueryClientProvider client={queryClient}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </QueryClientProvider>
  </DAppProvider>
);

export default App;
