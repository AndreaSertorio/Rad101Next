// _app.tsx

import { FocusProvider } from './components/FocusFiles/FocusContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FocusProvider>
      <Component {...pageProps} />
    </FocusProvider>
  );
}

export default MyApp;
