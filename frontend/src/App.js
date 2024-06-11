import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Chat from './components/Chat';
import NavigationBar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    <Router>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;