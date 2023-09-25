import React,{useState,useEffect} from 'react';


function Background(){
  const [getClassName, setGetClassName] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/background")
      .then((r) => r.json())
      .then((items) => {
        items.map((item)=> {
          console.log(item.name)
        })

      }
      
      );
  }, []);
}

export default Background