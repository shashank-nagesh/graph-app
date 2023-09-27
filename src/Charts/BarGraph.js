import React from 'react'
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'

function BGraph(){
    const data = [
        {id:1, name:'India TV', Trp_in_2022:12.7, Trp_in_2021:11.3},
        {id:2, name:'Aaj Taj', Trp_in_2022:12.5, Trp_in_2021:12.5},
        {id:3, name:'News18 ', Trp_in_2022:11.3, Trp_in_2021:10.4},
        {id:4, name:'Republic Bharat', Trp_in_2022:10.4, Trp_in_2021:8.6},
        {id:5, name:'TV 9', Trp_in_2022:10.2, Trp_in_2021:6.1},
        {id:6, name:'Zee News', Trp_in_2022:8.6, Trp_in_2021:12.7},
        {id:7, name:'Times Now', Trp_in_2022:7.0, Trp_in_2021:7.0},
        {id:8, name:'ABP News', Trp_in_2022:6.1, Trp_in_2021:10.4}
    ]
    return (
        <div>
            <center>
                <b> <h5 style={{color:"rgba(0,0,0,0.6)"}}>This is TRP of News Channels in year 2021 and 2022</h5> </b>
                <BarChart width={1000} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis strokeWidth={3}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Trp_in_2021" fill="#8884d8" />
                <Bar dataKey="Trp_in_2022" fill="#82ca9d" />
                </BarChart>
            </center>
        </div>
    )
}

export default BGraph