import React,{useState,useEffect,useContext} from 'react'
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import {  StateContext } from './App'

function AncesDesc(){
const {name} = useParams()
const [getDesc, setGetDesc] = useState("")
const [createCharacter,setCreateCharacter]=useContext(StateContext)

useEffect(() => {
    fetch(`http://localhost:3000/ancestry`)
      .then((response) => response.json())
      .then((items) => { 
       const found = items.find((item => item.name === name))
       setGetDesc(found.system.description.value)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function setAnces(){
    setCreateCharacter({
        ...createCharacter,
        ancestry: name
      })
}

return (
  <div className='AncesDesc'>
      <h1>{name}</h1> 
      {getDesc ? <div dangerouslySetInnerHTML={{ __html: getDesc }}></div> : <div>Ancestry not found</div>}
      <Link to='/' >
        <button onClick={setAnces} >save</button>
      </Link >
      <Link to='/Ancestry' >
        <button >back</button>
      </Link>
  </div>
)}

export default AncesDesc