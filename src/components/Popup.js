import React, { useState } from "react";


function Popup(){
    const [modal, setModal] = useState(false)

    const toggleModal = () =>{
        setModal(!modal)
    }
    
    return(
        <div>
            <div>
                <button className="btn-modal">Load</button>
            </div>
        </div>
    )
}

export default Popup