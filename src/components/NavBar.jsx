import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import img from "./../components/images/resu.png"

function NavBar() {
  return (
  <>
  <div>
  <nav className="navbar">
    <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
            Myapp
        </NavLink>


        <ul className="nav-menu">
            <li className="nav-item">
            <NavLink exact to="/" activeClassName="active" className="nav-links">
            Home
        </NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact to="/about" activeClassName="active" className="nav-links">
            About
        </NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact to="/blog" activeClassName="active" className="nav-links">
            Blog
        </NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact to="/contact" activeClassName="active" className="nav-links">
            Contact Us
        </NavLink>
            </li>

        </ul>



    

    </div>


  </nav>
  <img src={img} class="background" />



</div>


  </>
  );
}


export default NavBar