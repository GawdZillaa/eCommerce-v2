import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, gql } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-boost';
import { useSubscription } from '@apollo/react-hooks';
import apolloClient from './utilities/apolloSetup';
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
});

const cache = new InMemoryCache();

const client = new ApolloClient ({
  link : httpLink,
  cache
})

client.query({
  query: gql`
    {
      users {
        id
        name
        email
      }
    }
  `
}).then(res => console.log(res))


ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
    document.getElementById('root')
);
