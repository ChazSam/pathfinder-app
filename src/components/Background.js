import React,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Background(){
  const [getBackground, setGetBackground] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/background")
      .then((r) => r.json())
      .then((items) => {setGetBackground(items)})
        .catch((error) => {
        console.error("Error fetching data:", error);
          });
  }, []);

return (
  <div>
      <header className='header'>Background</header>
      <div className='name-list'>  
        {getBackground.map((background, index) => (
          <div key={index} className='name'>
              <Link to={`Background/${background.name}`} state={{from: "App"}}>{background.name}</Link>
          </div>
        ))}

      </div>
    </div>
    )
  }

export default Background