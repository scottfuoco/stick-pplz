import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DAppProvider, Config } from '@usedapp/core';

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
const App = ({ Component, pageProps }: AppProps) => (
  <DAppProvider config={dappConfig}>
    <QueryClientProvider client={queryClient}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </QueryClientProvider>
  </DAppProvider>
);

export default App;
