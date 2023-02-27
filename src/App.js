import React from 'react';
import './App.css'
import { BrowserRouter, Routes ,Route, Link, Text } from 'react-router-dom';
import LChart from './Charts/LineChart';
import BGraph from './Charts/BarGraph';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1 style={{ color:"rgb(238,50,51)"}}> Different types of Graphs </h1>
        <h3><Link to="/lineGraph"> Line Graph </Link> ||
        <Link to="/barGraph"> Bar Graph</Link> </h3>
      <Routes>
        <Route path="/lineGraph" element={<LChart /> }/>
        <Route path="/barGraph" element={<BGraph />} />
      </Routes>
      </div>  
    </BrowserRouter> 
  )
}

export default App;