import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Charting from './components/charting/charting.component';
import {Route} from 'react-router-dom'
import Chart from './components/chart/chart.component'
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, gql } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-boost';
import { useSubscription } from '@apollo/react-hooks';

const HatsPage = () => (
  
  <div>
    <h1>HATSS</h1>
  </div>
)



function App() {
  return (
    <div>
        <Route
          exact
          path='/'
          component={Chart}
        >
        </Route>
  {/* <ApolloProvider client={ApolloClient}>
        <Chart></Chart>
  </ApolloProvider> */}

    </div>
  );
}

export default App;
