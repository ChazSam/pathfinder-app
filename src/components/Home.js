import React, { useEffect, useState } from "react";
import Popup from "./Popup";
function Home({createCharacter, setCreateCharacter}) {

const [inputName, setInputName] = useState("")
const [loadCharacter, setLoadCharacter] = useState([])

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


function handleNameChange(e){
  setInputName(e.target.value)
}

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

function loadCharacterList(){
   console.log(loadCharacter)
}


function saveCharacter(){
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
function popupItem(){
  return (
    <div>
      <p></p>
    </div>
  )
}

  return <div className="home">
            <div>
              <header className='header'>Character Creation</header>
              <p>Click on of the links above to create a character!</p>
            </div>
          
            <div>
            <p>Name: {createCharacter.name} </p>
              <p>Ancestry: {createCharacter.ancestry} </p>
              <p>Class: {createCharacter.class} </p>
              <p>Background: {createCharacter.background} </p>
            </div>

            <div>
              <input type="text" value={inputName} placeholder="enter name" onChange={handleNameChange}></input>
              <button type='submit'onClick={setName}>Enter</button>
            </div>

            <div>
              <button type='submit' onClick={saveCharacter}>Save</button>
              <Popup/>
              <button type='submit' onClick={loadCharacterList}>Load</button>
              <button type='submit' onClick={reset}>Reset</button>
            </div>
          </div>
}
export default Home;
