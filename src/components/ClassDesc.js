import React,{useState,useEffect} from 'react'
import { Route, useParams } from 'react-router-dom/cjs/react-router-dom.min'

function ClassDesc({key}){
const {name} = useParams()
const [getDesc, setGetDesc] = useState("")


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
return (

<div>
    <h1>{name}</h1> 
    <div dangerouslySetInnerHTML={{ __html: getDesc }}></div>
    <button type='button'>save</button>
    <button type='button'>back</button>
</div>
   

)}
export default ClassDesc