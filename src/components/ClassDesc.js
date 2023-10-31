import React,{useState,useEffect, useContext} from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import {  StateContext } from './App'

function ClassDesc(){
const {name} = useParams()
const [getDesc, setGetDesc] = useState("")

const [createCharacter,setCreateCharacter]=useContext(StateContext)

useEffect(() => {
    fetch(`http://localhost:3000/class`)
      .then((response) => response.json())
      .then((items) => {
       const found = items.find((item => item.name === name))
       setGetDesc(found.system.description.value)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

function saveClass(){
    setCreateCharacter({
        ...createCharacter,
        class: name
    })
}
//wont use dangerouslySetInnerHTML in a live program
return (

<div className='ClassDesc'>
    <h1>{name}</h1> 
        {getDesc? <div dangerouslySetInnerHTML={{ __html: getDesc }}></div> : <div>class not found</div>}
        <Link to='/'>
            <button type='button'onClick={saveClass} >save</button>
        </Link>
        
        <Link to='/Classlist'>
            <button type='button'>back</button>
        </Link>
   
</div>
   

)}
export default ClassDesc