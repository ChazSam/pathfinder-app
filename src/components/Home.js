import React, { useState } from "react";

function Home({createCharacter, setCreateCharacter}) {

const [inputName, setInputName] = useState("")

function handleNameChange(e){
setInputName(e.target.value)
}

  function setName(){
    setCreateCharacter({
      ...createCharacter,
      name: inputName
    })
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
              <button type='submit' onClick={()=>console.log("save")}>Save</button>
              {/* <button type='submit' onClick={()=>console.log("load")}>Load</button> */}
              <button type='submit' onClick={()=>console.log("reset")}>Reset</button>
            </div>
          </div>
}
export default Home;
