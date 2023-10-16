import React, { useState } from "react";

function Popup({loadCharacter, setLoadCharacter}){
    const [modal, setModal] = useState(false)

    const toggleModal = () =>{
        setModal(!modal)
    }

    function setLoaded(){
        setLoadCharacter({

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
                       <button onClick={()=>console.log()} >select</button>
                    </div>
                ) )}
            
            </div>
        </div>
    )
}

export default Popup