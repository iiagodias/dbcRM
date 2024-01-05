import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { primary } from './theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={primary}>
        <View />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
