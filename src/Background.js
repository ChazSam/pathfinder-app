import React,{useState,useEffect} from 'react';


function Background(){
  const [getBackground, setGetBackground] = useState([])

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

  return (
    <div>
      <h1>Background</h1>
      {getBackground.map((background, index) => (
        <div key={index}>
             <p>{background.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Background