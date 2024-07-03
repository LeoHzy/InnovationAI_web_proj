import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo_innovationai.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Innovation AI Logo" /> 
        </div>
        <div className="gpt3__navbar-links_container">
          <p><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></p>
          <p><ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink></p>
          <p><ScrollLink to="chatbot" smooth={true} duration={500}>Chatbot</ScrollLink></p>
          <p><ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink></p>
          <div className="dropdown">
            <p><ScrollLink to="#" smooth={true} duration={500}>More</ScrollLink></p>
            <div className="dropdown-content">
              <p><ScrollLink to="temp1" smooth={true} duration={500}>Temp 1</ScrollLink></p>
              <p><ScrollLink to="temp2" smooth={true} duration={500}>Temp 2</ScrollLink></p>
              <p><ScrollLink to="temp3" smooth={true} duration={500}>Temp 3</ScrollLink></p>
            </div>
          </div>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><ScrollLink to="home" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Home</ScrollLink></p>
            <p><ScrollLink to="about" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>About Us</ScrollLink></p>
            <p><ScrollLink to="chatbot" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Chatbot</ScrollLink></p>
            <p><ScrollLink to="contact" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Contact Us</ScrollLink></p>
            <div className="dropdown">
            <p><ScrollLink to="#" smooth={true} duration={500}>More</ScrollLink></p>
            <div className="dropdown-content">
              <p><ScrollLink to="temp1" smooth={true} duration={500}>Temp 1</ScrollLink></p>
              <p><ScrollLink to="temp2" smooth={true} duration={500}>Temp 2</ScrollLink></p>
              <p><ScrollLink to="temp3" smooth={true} duration={500}>Temp 3</ScrollLink></p>
            </div>
          </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;