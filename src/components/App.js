
import React from 'react';
import Classlist from "./Classlist"
import Background from './Background';
import Ancestry from './Ancestry';
import Home from './Home';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import NavBar from './NavBar';


function App() {


  return (
  
    <BrowserRouter>
      <h1>Pathfinder 2e Character Builder</h1>
        <div className="App">
            <NavBar/> 
              <Switch>

                <Route exact path="/">
                  <Home />
                </Route>

                <Route path='/Classlist'>
                  <Classlist  />
                </Route>

                <Route path='/Ancestry' >
                  <Ancestry/>
                </Route>

                <Route path='/Background' >
                  <Background/>
                </Route>

              </Switch>
              
        </div>
    </BrowserRouter>
   
  );
}

export default App;
