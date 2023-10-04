import React from 'react'
import { Route, useParams } from 'react-router-dom/cjs/react-router-dom.min'

function ClassDesc(){
const {name} = useParams()
console.log(name)



return (

<div>
    <p>{name}</p> 
    <p>description</p>
    <button type='button'>save</button>
    <button type='button'>back</button>
</div>
   

)}
export default ClassDesc