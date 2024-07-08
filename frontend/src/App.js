import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Blog, Possibility, Features, About, Header, ChatPage, Contact } from './containers';
import { CTA, Brand, Navbar, FullArticle } from './components';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="gradient__bg">
                <Navbar />
                <Header />
                <CTA />
                <Brand />
              </div>
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
          }
        />
        <Route path="/blog/:articleId" element={<FullArticle />} />
      </Routes>
    </div>
  </Router>
);

export default App;