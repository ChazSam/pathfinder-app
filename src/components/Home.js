import React, { useEffect, useState, useContext } from "react";
import Popup from "./Popup";
import {  StateContext } from './App'

function Home() {

const [loadCharacter, setLoadCharacter] = useState([])
const [classes, setClasses] = useState([])
const [ancestries, setAncestries] = useState([])
const [backgrounds, setBackgrounds] = useState([])
const [createCharacter, setCreateCharacter]=useContext(StateContext)

function updateCharacterList(){
  fetch("http://localhost:3000/characters")
  .then((response) => response.json())
  .then((items) => {
    setLoadCharacter(items);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
}
  useEffect(() => {
    updateCharacterList()
  }, []);

useEffect(()=>{
  fetch("http://localhost:3000/characters")
  .then((response) => response.json())
  .then((items) => setLoadCharacter(items));

  fetch("http://localhost:3000/class")
  .then((response) => response.json())
  .then((items) => setClasses(items));

  fetch("http://localhost:3000/background")
  .then((response) => response.json())
  .then((items) => setBackgrounds(items));

  fetch("http://localhost:3000/ancestry")
  .then((response) => response.json())
  .then((items) => setAncestries(items));
},[])

function saveCharacter(){
 createCharacter.name === "" || createCharacter.class === "" || createCharacter.ancestry === "" || createCharacter.background === "" 
  ? alert("please fill in all options.") :

    fetch("http://localhost:3000/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createCharacter),
      
    })
    .then(updateCharacterList)
  
    .then (setCreateCharacter({
    ...createCharacter,
    name: "",
    ancestry: "",
    class:"",
    background:""
  }))
}

function updateCharacter(e){
  setCreateCharacter({
    ...createCharacter,
    [e.target.name] : e.target.value,
  })
}

  return <div className="home">
            <div>
              <header className='header'>Character Creation</header>
                <p>Click on of the links for more details</p>
            </div>

         <form onSubmit={(e)=>e.preventDefault()} >
            <div>
              <p>Name: {} 
                <input type="text" name="name" placeholder="enter name" onChange={updateCharacter}></input>
              </p>

              <p>Ancestry:   
                <select type="dropdown" name="ancestry" onChange={updateCharacter} value={createCharacter.ancestry}>
                    <option key={"none"} value={""}>---</option>
                        {ancestries.map((ancData,index)=>(
                          <option key={index} value={ancData.name} >{ancData.name}</option>
                        ))}
                </select>
              </p>

              <p>Class:   
                <select type="dropdown" name="class" value={createCharacter.class} onChange={updateCharacter}>
                  <option key={"none"} value={""}>---</option>
                        {classes.map((classData,index)=>(
                          <option key={index} value={classData.name}>{classData.name}</option>
                        ))}
                </select>
              </p>

              <p>Background:   
                <select type="dropdown" name="background" value={createCharacter.background} onChange={updateCharacter}>
                  <option key={"none"} value={""}>---</option>
                        {backgrounds.map((backData,index)=>(
                          <option key={index} value={backData.name}>{backData.name}</option>
                        ))}
                </select>
              </p>
            </div>

            <div>
              <button type='submit' onClick={saveCharacter}>Save</button>        
            </div>
            <Popup loadCharacter={loadCharacter} />
            </form> 
          </div>
}
export default Home;
