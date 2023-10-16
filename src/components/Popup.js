import React, { useState, useContext } from "react";
import { StateContext } from "./App";
import { Button } from "bootstrap";
import Modal from "bootstrap";

function Popup({loadCharacter, setLoadCharacter}){
    // const [modal, setModal] = useState(false)
    const [createCharacter, setCreateCharacter]=useContext(StateContext)

    // const toggleModal = () =>{
    //     setModal(!modal)
    // }

    function setLoaded(character){
        setCreateCharacter({
            name:character.name,
            ancestry: character.ancestry,
            class: character.class,
            background: character.background,
        })
    }
    
    return(

        <div>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Load Character
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Load Character</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
           <div className="overlay">
                 {loadCharacter.map((character)=>(
                     <div key={character.id}>
                       <p>{character.name}</p> 
                        <p>{character.ancestry}</p> 
                        <p>{character.class}</p> 
                        <p>{character.background}</p> 
                        <button onClick={()=>setLoaded(character)} data-bs-dismiss="modal">select</button>
                     </div>
                ) )}
            
             </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>

    )
}

export default Popup