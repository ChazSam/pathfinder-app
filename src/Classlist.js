import React,{useState,useEffect} from 'react';


function Classlist(){
  const [getClassName, setGetClassName] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/class")
      .then((r) => r.json())
      .then((items) => {
        items.map((item)=> {
          console.log(item.system.description)
        })

      }
      
      );
  }, []);
}

export default Classlist

