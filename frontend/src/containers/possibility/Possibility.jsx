import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import { Link } from 'react-scroll';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Get Started with Innovation AI</h4>
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>At Innovation AI, we are dedicated to making AI technology and services accessible to organizations and users around the world. Discover how our cutting-edge solutions can transform your business and enhance your everyday life with intelligent solutions.</p>
      <Link to="chatbot" smooth={true} duration={500}>
        <h4 className="cta-link">Get Early Access to Our Chatbot</h4>
      </Link>
    </div>
  </div>
);

export default Possibility;