import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Catalog from './components/Catalog';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    // store => é o store criado no redux
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
};

export default App;
