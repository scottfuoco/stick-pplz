import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

import '@/src/styles/globals.scss';
import '@/src/styles/forms.scss';
import '@/src/styles/animations.scss';

const queryClient = new QueryClient();
const App = ({ Component, pageProps }: AppProps) => {
  if (typeof window !== 'undefined') {
    injectStyle();
  }

  return (
    <QueryClientProvider client={queryClient}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />

      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
