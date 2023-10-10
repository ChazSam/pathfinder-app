import React,{useState,useEffect} from 'react';
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min';
import BackDesc from './BackDesc';

function Background({createCharacter, setCreateCharacter}){
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
 console.log(createCharacter)

  return (
<div>
    <header className='header'>Background</header>
    <div className='name-list'>
     
      {getBackground.map((background, index) => (
        <div key={index} className='name'  createCharacter={createCharacter} setCreateCharacter={setCreateCharacter}>
             <Link to={`Background/${background.name}`} state={{from: "App"}}>{background.name}</Link>
        </div>
      ))}

    </div>
  </div>
  )
}
// return (
//   <div>
//     <header className='header'>Background</header>
//     <div className='name-list'>
//       {getBackground.map((background, index) => (
//         <div key={index} className='name'>
//           <Link to={`/Background/${background.name}`}>{background.name}</Link>
//         </div>
//       ))}
//     </div>

//     {/* Define a Route to render a component when the background name is clicked */}
//     <Route
//       path="/Background/:name"
//       createRoot={(props) => (
//         // Render the component with createCharacter and setCreateCharacter props
//         <BackDesc
//           {...props}
//           createCharacter={createCharacter}
//           setCreateCharacter={setCreateCharacter}
//         />
//       )}
//     />
//   </div>
// );
// }
export default Background