import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Classlist({createCharacter, setCreateCharacter}){
const [getClassName, setGetClassName] = useState([])
const [addDescription, setAddDescription] =useState("")

  useEffect(() => {
    fetch("http://localhost:3000/class")
      .then((response) => response.json())
      .then((items) => {
        setGetClassName(items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function getDescription (i){
     setAddDescription(getClassName[i].system.description.value)
  }

return (
  <div>
    <header className='header'>Classes</header>
  <div className="name-list">

    {getClassName.map((classItem, index) => (
      <div key={index} className="name" onClick={()=>getDescription(index)} >  
        <Link to={`Classlist/${classItem.name}`}>{classItem.name}</Link>
  
      </div>
    ))}
    
  </div>
  </div>
)

}

export default Classlist

