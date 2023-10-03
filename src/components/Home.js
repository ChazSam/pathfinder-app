import React from "react";

function Home({createCharacter, setCreateCharacter}) {
  return <div className="home">
            <div>
              <header className='header'>Character Creation</header>
              <p>Click on of the links above to create a character!</p>
            </div>
          
            <div>
              <p>Ancestry</p>
              <p>Class</p>
              <p>Background</p>
            </div>

            <div>
              <button type='submit' onClick={()=>console.log("save")}>Save</button>
              <button type='submit' onClick={()=>console.log("load")}>Load</button>
              <button type='submit' onClick={()=>console.log("reset")}>Reset</button>
            </div>
          </div>
}
export default Home;
