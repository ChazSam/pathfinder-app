import React, { useState } from 'react';
import Classlist from "./Classlist"
import Background from './Background';
import Ancestry from './Ancestry';
import Home from './Home';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import NavBar from './NavBar';
import '/root/Development/code/se-prep/phase-2/pathfinder-app/src/index.css';
import ClassDesc from './ClassDesc';
import BackDesc from './BackDesc';
import AncesDesc from './AncesDesc';

function App() {
const [createCharacter, setCreateCharacter] = useState([])

  return (
  
    <BrowserRouter>
      <h1 className='title'>Pathfinder 2e Character Builder</h1>
        <div className="App">
            <NavBar/> 
              <Switch>

                <Route exact path="/">
                  <Home createCharacter={createCharacter} setCreateCharacter={setCreateCharacter} />
                </Route>

                <Route exact path='/Classlist'>
                  <Classlist createCharacter={createCharacter} setCreateCharacter={setCreateCharacter} />
                </Route>

                <Route path='/Classlist/:name' > 
                <ClassDesc/>
                 </Route>

                <Route exact path='/Ancestry' >
                  <Ancestry createCharacter={createCharacter} setCreateCharacter={setCreateCharacter} />
                </Route>

                <Route path='/Ancestry/:name' > 
                <AncesDesc/>
                 </Route>

                <Route exact path='/Background' >
                  <Background createCharacter={createCharacter} setCreateCharacter={setCreateCharacter} />
                </Route>

                <Route path='/Background/:name' > 
                <BackDesc/>
                 </Route>
                {/* <Route path='/ClassDesc' >
                  <ClassDesc createCharacter={createCharacter} setCreateCharacter={setCreateCharacter} />
                </Route> */}

              </Switch>
              
        </div>

    </BrowserRouter>

  );
}

export default App;
