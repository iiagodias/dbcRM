import { ApolloClient, InMemoryCache } from '@apollo/client';
import { uriGraphQL } from '../constants/urls';

const clientApollo = new ApolloClient({
  uri: uriGraphQL,
  cache: new InMemoryCache(),
});

export default clientApollo;
