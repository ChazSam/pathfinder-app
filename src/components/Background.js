import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Background({createCharacter, setCreateCharacter}){
  const [getBackground, setGetBackground] = useState([])
const [backDescription, setBackDescription] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/background")
      .then((r) => r.json())
      .then((items) => {
        
          setGetBackground(items)
        })
        .catch((error) => {
        console.error("Error fetching data:", error);
          });
      
  }, []);

  function getDescription (i){
    setBackDescription(getBackground[i].system.description.value)
 }

  return (
<div>
    <header className='header'>Background</header>
    <div className='name-list'>
     
      {getBackground.map((background, index) => (
        <div key={index} className='name' onClick={()=>getDescription(index)}>
             <Link to={`Background/${background.name}`}>{background.name}</Link>
        </div>
      ))}
      <div dangerouslySetInnerHTML={{ __html: backDescription }}></div>
    </div>
  </div>
  )
}

export default Background