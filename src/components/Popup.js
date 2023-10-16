import React, { useState, useContext } from "react";
import { StateContext } from "./App";

function Popup({loadCharacter, setLoadCharacter}){
    const [modal, setModal] = useState(false)
    const [createCharacter, setCreateCharacter]=useContext(StateContext)

    const toggleModal = () =>{
        setModal(!modal)
    }

    function setLoaded(character){
        setCreateCharacter({
            name:character.name,
            ancestry: character.ancestry,
            class: character.class,
            background: character.background,
        })
    }
    
    return(
        <div className="popup">
            <div className="overlay">
                {loadCharacter.map((character)=>(
                    <div key={character.id}>
                       <p>{character.name}</p> 
                       <p>{character.ancestry}</p> 
                       <p>{character.class}</p> 
                       <p>{character.background}</p> 
                       <button onClick={()=>setLoaded(character)} >select</button>
                    </div>
                ) )}
            
            </div>
        </div>
    )
}

export default Popup