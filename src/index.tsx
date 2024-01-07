import { ApolloProvider } from '@apollo/client';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import MainNavigator from './routes/MainNavigator';
import clientApollo from './services/apolloClient';
import store, { persistor } from './store';
import { primary } from './theme';

const App: React.FC = () => {
  return (
    <ApolloProvider client={clientApollo}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={primary}>
            <MainNavigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
