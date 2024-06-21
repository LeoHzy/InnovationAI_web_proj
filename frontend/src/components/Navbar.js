import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Custom CSS for Navbar
import logo from '../assets/logo_innovationai.png'; // Import the logo image

const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Innovation AI Logo" className="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/chatbot' ? 'active' : ''}`}>
            <Link className="nav-link" to="/chatbot">Chatbot</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#">Temp 1</Link>
              <Link className="dropdown-item" to="#">Temp 2</Link>
              <Link className="dropdown-item" to="#">Temp 3</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;