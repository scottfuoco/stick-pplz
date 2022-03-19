import { AppProps } from 'next/app';
import '@/src/styles/globals.css';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default App;
