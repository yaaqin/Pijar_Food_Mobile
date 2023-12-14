/* eslint-disable prettier/prettier */
import React from 'react';
import {Provider} from 'react-redux';

import store from './src/redux/store';

import {PersistGate} from 'redux-persist/integration/react';

import Main from './src/App';

export default function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistore}>
        <Main />
      </PersistGate>
    </Provider>
  );
}