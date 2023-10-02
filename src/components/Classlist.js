import React,{useState,useEffect} from 'react';


function Classlist(){
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
  <div className="name-list">
    <h1>Classes</h1>
    {getClassName.map((classItem, index) => (
      <div key={index} className="name" onClick={()=>getDescription(index)} >  
        <p>{classItem.name}</p>
        {/* <a>{classItem.system.description}</a> */}
      </div>
    ))}
    <div dangerouslySetInnerHTML={{ __html: addDescription }}></div>
  </div>
)

}

export default Classlist

