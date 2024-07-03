// src/containers/chat/ChatPage.jsx
import React from 'react';
import Chatbot from '../../components/chatbot/Chatbot';
import './ChatPage.css';

const ChatPage = () => {
  return (
    <div>
      <div className="chat-page-heading" id="chatbot">
        <h1 className="gradient__text">Chat with our AI Chatbot !</h1>
      </div>
      <div className="chat-page">
        <Chatbot />
      </div>
      </div>
  );
};

export default ChatPage;