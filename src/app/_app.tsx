// _app.tsx

// import { FocusProvider } from './components/FocusFiles/FocusContext';
// import EditableFieldsContext from './contexts/EditableFieldsContext'; 
import type { AppProps } from 'next/app';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [editableFields, setEditableFields] = useState({}); 
  return (
        <Component {...pageProps} />
  );
}

export default MyApp;
