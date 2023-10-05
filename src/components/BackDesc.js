import React,{useState,useEffect} from 'react'
import { Route, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'

function BackDesc(){
const {name} = useParams()
const [getDesc, setGetDesc] = useState("")


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

return (

<div>
    <h1>{name}</h1> 
    {getDesc ? <div dangerouslySetInnerHTML={{ __html: getDesc }}></div> : <div>Background not found</div>}
    <Link to='/'>
        <button type='button'>save</button>
    </Link>
    <Link to='/Background'>
        <button type='button'>back</button>
    </Link>
   
</div>
   

)}
export default BackDesc