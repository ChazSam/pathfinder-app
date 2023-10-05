import React,{useState,useEffect} from 'react';
import '/root/Development/code/se-prep/phase-2/pathfinder-app/src/index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Ancestry({createCharacter, setCreateCharacter}){
  const [getAncestry, setGetAncestry] = useState([])
  const[ancestryDesc, setAncestryDesc] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/ancestry")
      .then((r) => r.json())
      .then((items) => {
        
          setGetAncestry(items)
        })

        .catch((error) => {
            console.error("Error fetching data:", error);
          });
      
  }, []);

  function getDescription (i){
    setAncestryDesc(getAncestry[i].system.description.value)
 }


  return (
    <div>
      <header className='header'>Ancestry</header>
    <div className='name-list'>
      {getAncestry.map((ancestry, index)=> (
        <div key={index} className='name' onClick={()=>getDescription(index)}>
        <Link to={`Ancestry/${ancestry.name}`}>{ancestry.name}</Link>
        </div>
      ))}
          <div dangerouslySetInnerHTML={{ __html: ancestryDesc }}></div>
    </div>
    </div>
  )
}

export default Ancestry