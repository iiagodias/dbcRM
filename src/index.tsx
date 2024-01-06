import { ApolloProvider } from '@apollo/client';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import MainNavigator from './routes/MainNavigator';
import clientApollo from './services/apolloClient';
import store from './store';
import { primary } from './theme';

const App: React.FC = () => {
  return (
    <ApolloProvider client={clientApollo}>
      <Provider store={store}>
        <ThemeProvider theme={primary}>
          <MainNavigator />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
