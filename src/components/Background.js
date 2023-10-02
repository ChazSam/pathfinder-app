import React,{useState,useEffect} from 'react';

function Background(){
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
    <div className='name-list'>
      <h1>Background</h1>
      {getBackground.map((background, index) => (
        <div key={index} className='name' onClick={()=>getDescription(index)}>
             <p>{background.name}</p>
        </div>
      ))}
      <div dangerouslySetInnerHTML={{ __html: backDescription }}></div>
    </div>
  )
}

export default Background