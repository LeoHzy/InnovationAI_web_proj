import React from 'react';
import { Link } from 'react-scroll';
import './cta.css';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Discover the Future of AI</p>
      <h3>Meet our AI Chatbot Today & Unlock New Possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <Link to="chatbot" smooth={true} duration={300}>
        <button type="button">Get Started</button>
      </Link>
    </div>
  </div>
);

export default CTA;