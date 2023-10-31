import React, { useState, createContext } from 'react';
import Classlist from "./Classlist"
import Background from './Background';
import Ancestry from './Ancestry';
import Home from './Home';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import NavBar from './NavBar';
import ClassDesc from './ClassDesc';
import BackDesc from './BackDesc';
import AncesDesc from './AncesDesc';
import '/root/Development/code/se-prep/phase-2/pathfinder-app/src/index.css';

export const StateContext = createContext()

function App() {

const [createCharacter, setCreateCharacter] = useState({
  name: '',
  ancestry: '',
  class: '',
  background: '',
})

  return (
   <StateContext.Provider value = {[createCharacter, setCreateCharacter]}>
    <BrowserRouter>
    <div className="App">
      <h1 className='title'>Pathfinder 2e Character Builder</h1>
        
            <NavBar/> 
              <Switch>

                <Route exact path="/">
                  <Home  />
                </Route>

                <Route exact path='/Classlist'>
                  <Classlist />
                </Route>

                <Route path='/Classlist/:name' > 
                  <ClassDesc />
                </Route>

                <Route exact path='/Ancestry' >
                  <Ancestry />
                </Route>

                <Route path='/Ancestry/:name' > 
                  <AncesDesc />
                </Route>

                <Route exact path='/Background' >
                  <Background />
                </Route>

                <Route path='/Background/:name' > 
                  <BackDesc/>
                </Route>

              </Switch>
        </div>
    </BrowserRouter>
  </StateContext.Provider>
  );
}

export default App;
