import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Innovation AI</h1>
      <nav>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/chatbot">Chat</Link>
      </nav>
    </div>
  );
}

export default Home;