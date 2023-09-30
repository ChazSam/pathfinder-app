import React,{useState,useEffect} from 'react';


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
    <h1>Classes</h1>
    {getClassName.map((classItem, index) => (
      <div key={index}>  
        <p>{classItem.name}</p>
        {/* <a>{classItem.system.description}</a> */}
      </div>
    ))}
  </div>
)

}

export default Classlist

