import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
     <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Ancestry">Ancestry</NavLink>
        </li>
        <li>
          <NavLink to="/Classlist">Classes</NavLink>
        </li>
        <li>
          <NavLink to="/Background">Background</NavLink>
        </li>
      </ul>
    </nav>
  </div>;
}

export default NavBar;
