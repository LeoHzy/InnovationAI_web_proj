import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Footer, Blog, Possibility, Features, About, Header, ChatPage, Contact } from './containers';
import { CTA, Brand, Navbar} from './components';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <CTA />
      </div>
      <Brand />
      <div id="about">
        <About />
        <Features />
      </div>
      <div id="possibility">
        <Possibility />
      </div>
      <div id="chatbot">
        <ChatPage />
      </div>
      <Blog />
      <div id="contact">
        <Contact />
      </div>
      
      
      <Footer />
    </div>
  </Router>
);

export default App;