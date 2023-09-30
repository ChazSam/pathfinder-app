
import React from 'react';
import Classlist from "./Classlist"
import Background from './Background';
import Ancestry from './Ancestry';
import Home from './Home';
import {Route, Switch, BrowserRouter} from "react-router-dom"

function App() {


  return (
    // <Router>
    <div className="App">
      <h1></h1>
        {/* <Navbar/>  */}
         <div >
           <Home/>
           <Classlist/>
           <Ancestry/>
           <Background/>
      </div>
    </div>
    // </Router>
  );
}

export default App;
