
import './App.css';
import React from 'react';
import Classlist from "./Classlist"
import Background from './Background';
import Ancestry from './Ancestry';

function App() {


  return (
    <div className="App">
      <h1>Pathfinder 2e Character Builder</h1>
      <div style={{ display: 'inline-block', padding:"100px" }}>
        <Classlist/>
      </div>
      <div style={{ display: 'inline-block', padding:"100px" }}>
         <Ancestry/>
      </div>
      <div style={{ display: 'inline-block', padding:"100px" }}>
         <Background/>
      </div>
    </div>
  );
}

export default App;
