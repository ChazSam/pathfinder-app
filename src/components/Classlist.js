import React,{useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Classlist(){
const [getClassName, setGetClassName] = useState([])


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

  
return (
  <div>
    <header className='header'>Classes</header>
  <div className="name-list">

    {getClassName.map((classItem, index) => (
      <div key={index} className="name"  >  
        <Link  to={`Classlist/${classItem.name}`}>{classItem.name}</Link>
      </div>
    ))}
    
  </div>
  </div>
)}

export default Classlist

