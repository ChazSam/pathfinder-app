import React, { useState, createContext, useEffect } from 'react';
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

export const StateContext = createContext()


// export const AppDataList = createContext()

function App() {

// const [appData, setAppData] = useState([])

// useEffect(() => {
//   fetch("http://localhost:3000/data")
//     .then((response) => response.json())
//     .then((items) => {
//       setAppData(items);
  
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }, []);

const [createCharacter, setCreateCharacter] = useState({
  name: '',
  ancestry: '',
  class: '',
  background: '',
})

  return (
   <StateContext.Provider value = {[createCharacter, setCreateCharacter]}>
    {/* <AppDataList.Provider value={[appData, setAppData]}> */}
    <BrowserRouter>
      <h1 className='title'>Pathfinder 2e Character Builder</h1>
        <div className="App">
            <NavBar/> 
              <Switch>

                <Route exact path="/">
                  <Home  createCharacter={createCharacter} setCreateCharacter={setCreateCharacter}/>
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
    {/* </AppDataList.Provider> */}
  </StateContext.Provider>
  );
}

export default App;
