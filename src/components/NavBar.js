import React from "react";
import { NavLink } from "react-router-dom";
import '/root/Development/code/se-prep/phase-2/pathfinder-app/src/index.css';

function NavBar() {
  return (
     <nav>
         <NavLink to="/"> Home </NavLink> 
         <NavLink to="/Ancestry"> Ancestry </NavLink> 
         <NavLink to="/Classlist"> Classes </NavLink> 
         <NavLink to="/Background"> Background </NavLink> 
     </nav>
  )
}

export default NavBar;
