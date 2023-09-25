import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {

const [getClassName, setGetClassName] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/class")
      .then((r) => r.json())
      .then((items) => {
        items.map((item)=> {
          setGetClassName(item.name)
        })
        console.log(getClassName)
      }
      
      );
  }, []);

  return (
    <div className="App">


        <a>
          Hello World
        </a>
  
    </div>
  );
}

export default App;
