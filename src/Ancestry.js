import React,{useState,useEffect} from 'react';


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
      <h1>Ancestry</h1>
      {getAncestry.map((ancestry, index)=> (
        <div key={index}>
        <p>{ancestry.name}</p>
        </div>
      ))}
    </div>
  )
  

}

export default Ancestry