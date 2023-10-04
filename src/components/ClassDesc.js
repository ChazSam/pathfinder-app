import React from 'react'
import { Route, useParams } from 'react-router-dom/cjs/react-router-dom.min'

function ClassDesc(){
const {classItem} = useParams()
return (
  


<div>
    <p>{classItem}</p>
    <div dangerouslySetInnerHTML={{ __html: classItem }}></div>
    <button type='button'>save</button>
    <button type='button'>back</button>
</div>
   

)
}
export default ClassDesc