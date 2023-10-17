import React,{useState,useEffect} from 'react';
import '/root/Development/code/se-prep/phase-2/pathfinder-app/src/index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Ancestry(){
  const [getAncestry, setGetAncestry] = useState([])


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


  return (
    <div>
      <header className='header'>Ancestry</header>
    <div className='name-list'>
      {getAncestry.map((ancestry, index)=> (
        <div key={index} className='name' >
        <Link to={`Ancestry/${ancestry.name}`}>{ancestry.name}</Link>
        </div>
      ))}

    </div>
    </div>
  )
}

export default Ancestry