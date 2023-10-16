import React,{useState,useEffect, useContext} from 'react'
import { Route, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import {  StateContext } from './App'
// import { AppDataList } from './App';

function BackDesc(){
const {name} = useParams()
const [getDesc, setGetDesc] = useState("")


const [createCharacter,setCreateCharacter]=useContext(StateContext)

// const [appData,setAppData]=useContext(AppDataList)
// useEffect(()=>{
//     const found = appData[0].background.find((item => item.name === name))
//     setGetDesc(found.system.description.value)
//     }, [])
    
useEffect(() => {
    fetch(`http://localhost:3000/background`)
      .then((response) => response.json())
      .then((items) => {
  
       const found = items.find((item => item.name === name))
       setGetDesc(found.system.description.value)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


function setBackground(){
    setCreateCharacter({
        ...createCharacter,
        background: name
      })
}

return (

<div>
    <h1>{name}</h1> 
    {getDesc ? <div dangerouslySetInnerHTML={{ __html: getDesc }}></div> : <div>Background not found</div>}
    <Link to='/'>
        <button type='button'onClick={setBackground}>save</button>
    </Link>
    <Link to='/Background'>
        <button type='button'>back</button>
    </Link>
   
</div>
   

)}
export default BackDesc