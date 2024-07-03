import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo_innovationai.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step into the future before others?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <Link to="chatbot" smooth={true} duration={500}>
        <button type="button">Try Our Chatbot</button>
      </Link>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="Innovation AI Logo" />
        <p>18 S 2nd St, Office NO.115 San Jose, California 95113, US<br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <Link to="home" smooth={true} duration={500}><p>Home</p></Link>
        <Link to="about" smooth={true} duration={500}><p>About Us</p></Link>
        <Link to="chatbot" smooth={true} duration={500}><p>Chatbot</p></Link>
        <Link to="contact" smooth={true} duration={500}><p>Contact Us</p></Link>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>18 S 2nd St, Office NO.115 San Jose, California 95113, US</p>
        <p>+1 012 3456 789</p>
        <p>info@innovation-ai.co</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 Innovation AI. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;