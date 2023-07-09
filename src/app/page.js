// Page.jsx

import { FocusProvider } from './components/FocusFiles/FocusContext';
import Home from './Home';

const App = () => {
  return (
    <FocusProvider>
      <Home />
    </FocusProvider>
  );
};

export default App;
