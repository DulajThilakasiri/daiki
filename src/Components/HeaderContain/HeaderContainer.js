import React, { useState }from "react";
import logo from "../../Resourses/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";


const Header = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleLogoClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200); // Duration of the animation
  };

  return (
    <header  className="HeaderContainer">
      <div className="Logo-Container">
          <NavLink exact to="/" onClick={handleLogoClick}>
              <img src={logo} alt="Logo" className={`logo ${isClicked ? 'logo-clicked' : ''}`} />
          </NavLink>
      </div>

      <div className="navbar">
        <nav>
          <ul>
            <li><NavLink exact to="/" className={({ isActive }) => (isActive ? "active" : "")}> Home</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink></li>
            <li><NavLink to="/aboutus" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink></li> 
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}> Contact </NavLink> </li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
};

export default Header;
