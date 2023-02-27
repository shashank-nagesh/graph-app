import React from 'react'
import {Line, LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from 'recharts'

function LChart() {
    const data = [
      {id:1, React:4.2, Angular:4, React_Native:4.5, exp:"fresher"},
      {id:2, React:5.0, Angular:4.5, React_Native:5.25, exp:"1 Year"},
      {id:3, React:5.8, Angular:5.5, React_Native:6, exp:"2 Years"},
      {id:4, React:8.5, Angular:6.5, React_Native:9.1, exp:"3 Years"},
      {id:5, React:9.5, Angular:8.5, React_Native:10, exp:"4 Years"},
      {id:6, React:13, Angular:9.2, React_Native:14.8, exp:"5 Years"},
      {id:7, React:14.1, Angular:10.5, React_Native:16, exp:"6 Years"},
      {id:8, React:20, Angular:15, React_Native:21.5, exp:"7 Years"},
      {id:9, React:22, Angular:16, React_Native:25, exp:"8 Years"},
    ]
    return (
      <div>
        <center>
          <b> <h5 style={{color:"rgba(0,0,0,0.6)"}}>This is salary of different Software Developers with different Technologies </h5> </b>
          <LineChart width={1000} height={300} data={data} contentContainerStyle={{justifyContent:'center',alignItems:'center'}} >
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="exp" strokeWidth={2}/>
            <YAxis strokeWidth={2}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="React" stroke="#000080" strokeWidth={3} />
            <Line type="monotone" dataKey="Angular" stroke="#8b0000" strokeWidth={3} />
            <Line type="monotone" dataKey="React_Native" stroke="#9ACD32" strokeWidth={3} />
          </LineChart>
        </center>
      </div>
    );
  }

  export default LChart
