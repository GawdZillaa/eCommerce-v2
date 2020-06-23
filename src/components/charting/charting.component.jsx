import React from 'react';
import svg from 'svg'
import './charting.styles.scss';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts';

class Charting extends React.Component {
  constructor() {
    super();

    this.state = {

      data : [
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
      ],
      isOne : true,
      isTwo : false
    };
  }

  componentDidMount(){
    let intervalTimer = setInterval( () =>{ 
      // this.process();
    }, 3000);
  }

  process(){
    let newDataList = []
    for(let data of this.state.data){
      let { name, uv, pv, amt } = data;

      let newDataObject = {
        name : name,
        uv : Math.floor(Math.random() * (10000 - 500) ) + 500,
        pv : Math.floor(Math.random() * (10000 - 500) ) + 500,
        amt : Math.floor(Math.random() * (10000 - 500) ) + 500,
      }

      newDataList.push(newDataObject);
    }
    this.setState({data : newDataList});
    console.log("New Data". newDataList)
  }

  render() {
    return (
      <div style={{
        height : '100vh',
        width: '100%',
        backgroundColor : ''
     }}>

    <LineChart width={600} height={300} data={this.state.data} >
      {
        this.state.isOne ?
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> : null

      }
      {
        this.state.isTwo ?
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
}

export default Charting;
