import React, { useEffect, useState, useContext } from "react";
import Popup from "./Popup";
import {  StateContext } from './App'


function Home() {

const [inputName, setInputName] = useState("")
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
// function handleNameChange(e){
//   setInputName(e.target.value)
// }

  function setName(){
    setCreateCharacter({
      ...createCharacter,
      name: inputName
    })
    setInputName("")
  }
  
  function reset(){
    setCreateCharacter({
      ...createCharacter,
      name: "",
      ancestry: "",
      class:"",
      background:""
    })
  }

function saveCharacter(){
 createCharacter.name === "" || createCharacter.class === "" || createCharacter.ancestry === "" || createCharacter.background === "" 
  ?  console.log("error") :

    fetch("http://localhost:3000/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createCharacter),
      
    })
    .then(updateCharacterList)
  

  setCreateCharacter({
    ...createCharacter,
    name: "",
    ancestry: "",
    class:"",
    background:""
  })
}

function changeAncestry(e){
 setCreateCharacter({
  ...createCharacter,
  ancestry: e.target.value
 })
}

function changeClass(e){
 setCreateCharacter({
  ...createCharacter,
  class: e.target.value
 })
}

function changeBackground(e){
 setCreateCharacter({
  ...createCharacter,
  background: e.target.value
 })
}

function loadCharacterList(){
  console.log(createCharacter)
}

  return <div className="home">
            <div>
              <header className='header'>Character Creation</header>
              <p>Click on of the links for more details</p>
            </div>

         <form onSubmit={(e)=>e.preventDefault()} >
            <div>
            <p>Name: {createCharacter.name} </p>
            <input type="text" value={inputName} placeholder="enter name" onChange={(e)=>setInputName(e.target.value)}></input>
            <button type='submit'onClick={setName}>Enter</button>

              <p>Ancestry:   <select type="dropdown"  onChange={changeAncestry} value={createCharacter.ancestry}>
                          <option key={"none"} value={""}>---</option>
                        {ancestries.map((ancData,index)=>(
                          <option key={index} value={ancData.name} >{ancData.name}</option>
                        ))}
                </select></p>

              <p>Class:   <select type="dropdown" value={createCharacter.class} onChange={changeClass}>
                  <option key={"none"} value={""}>---</option>
                        {classes.map((classData,index)=>(
                          <option key={index} value={classData.name}>{classData.name}</option>
                        ))}
                </select></p>

              <p>Background:   <select type="dropdown" value={createCharacter.background} onChange={changeBackground}>
                      <option key={"none"} value={""}>---</option>
                        {backgrounds.map((backData,index)=>(
                          <option key={index} value={backData.name}>{backData.name}</option>
                        ))}
                </select></p>
            </div>

            <div>
              <button type='submit' onClick={saveCharacter}>Save</button>        
              <button type='submit' onClick={loadCharacterList}>Load</button>
              <button type='submit' onClick={reset}>Reset</button>
            </div>
            <Popup loadCharacter={loadCharacter} setLoadCharacter={setLoadCharacter}/>
            </form> 


          </div>
}
export default Home;
