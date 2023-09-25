import React,{useState,useEffect} from 'react';


function Ancestry(){
  const [getClassName, setGetClassName] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/ancestry")
      .then((r) => r.json())
      .then((items) => {
        items.map((item)=> {
          console.log(item.name)
        })

      }
      
      );
  }, []);
}

export default Ancestry