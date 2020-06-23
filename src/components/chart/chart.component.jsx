import React from 'react';
import svg from 'svg'
import './chart.styles.scss';
import { useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-boost';


import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts';
// const SUBSCRIBE_VIDEO_ADDED = gql`
//       subscription {
//         count
//       }
// `;
const isOne =true;
const isTwo = true;
const chartData = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const subscribe_chart = gql`
    subscription {
      count
    }
`;
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
});
const cache = new InMemoryCache();

const client = new ApolloClient ({
  link : httpLink,
  cache
})

const Chart = () => {
  const { data, error, loading } = useSubscription(subscribe_chart, {});

  
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
  let gendata = () => {
    console.log("YAY")
  }

  if (loading) {
    return <div>Loading...</div>;
  };
//sSss
  if (error) {
    return <div>Error! {error.message}</div>;
  };
  console.log(data)
  let newDataList = []
  for(let data of chartData){
    let { name, uv, pv, amt } = data;

    let newDataObject = {
      name : name,
      uv : Math.floor(Math.random() * (10000 - 500) ) + 500,
      pv : Math.floor(Math.random() * (10000 - 500) ) + 500,
      amt : Math.floor(Math.random() * (10000 - 500) ) + 500,
    }

    newDataList.push(newDataObject);
  }
  console.log(newDataList)
  return (
    <div >
    <LineChart width={600} height={300} data={newDataList} >
      {
        isOne ?
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> : null

      }
      {
        isTwo ?
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> : null

      }
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />

  </LineChart>
    </div>
  );
}


export default Chart;
