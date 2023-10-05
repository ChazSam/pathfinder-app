import React,{useState,useEffect} from 'react'
import { Link, Route, useParams } from 'react-router-dom/cjs/react-router-dom.min'

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
    {getDesc? <div dangerouslySetInnerHTML={{ __html: getDesc }}></div> : <div>class not found</div>}
    <Link to='/'>
        <button type='button'>save</button>
    </Link>
    
    <Link to='/Classlist'>
        <button type='button'>back</button>
    </Link>
   
</div>
   

)}
export default ClassDesc