import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import NavigationTab from '@navigation/routes';

import './assets/langauge/i18n';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationTab />
    </Provider>
  );
};
//AIzaSyBj6Igw-wowgLCaL4m7-e0dLrkehwgBuqo
export default App;
