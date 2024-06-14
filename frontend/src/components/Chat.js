import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from '@chatscope/chat-ui-kit-react';
import '../App.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: "Welcome to Innovation AI! How can I help you today?",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const OPENAI_API_KEY = '';

  const systemMessage = {
    role: 'system',
    content: 'You are a helpful assistant. Your company is a company called Innovation AI. The company have the address at 18 S 2nd St, Office NO.115, San Jose, California 95113, US. We are a company aiming to make AI technology and services accessible to organizations and users around the world. We develop Cloud services to deploy Statistical and Artificial Intelligence models. And we conduct Machine Learning models experiments and research to produce actionable recommendations, customer behavior analysis, and draw insights for business growth. Our clients comprise Corporations, Open Source Foundations, and End Users.'
  };

  const handleSend = async (message) => {
    if (isRateLimited) {
      const rateLimitMessage = { message: 'You are sending messages too quickly. Please wait a moment.', sender: 'ChatGPT' };
      setMessages([...messages, rateLimitMessage]);
      return;
    }

    const userMessage = { message: message, sender: 'User' };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setIsTyping(true);

    // Fetch response from OpenAI's API
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === 'ChatGPT' ? 'assistant' : 'user';
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        systemMessage,
        ...apiMessages
      ]
    };

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(apiRequestBody)
      });

      if (response.status === 429) {
        setIsRateLimited(true);
        setTimeout(() => setIsRateLimited(false), 60000); // Wait for 1 minute before allowing more requests
        console.error('Rate limit exceeded. Please wait a moment before sending more messages.');
        throw new Error('Rate limit exceeded');
      }

      const data = await response.json();
      if (!data.choices || data.choices.length === 0) {
        throw new Error('No choices found in the response');
      }

      const botMessage = {
        message: data.choices[0].message.content,
        sender: 'ChatGPT'
      };
      setMessages([...chatMessages, botMessage]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
      const errorMessage = {
        message: 'Sorry, I am having trouble responding right now.',
        sender: 'ChatGPT'
      };
      setMessages([...chatMessages, errorMessage]);
      setIsTyping(false);
    }
  }

  return (
    <div className="outer-container">
      <div className="chat-box">
        <MainContainer>
          <ChatContainer className="chat-container">
            <MessageList>
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  model={{
                    message: msg.message,
                    sentTime: 'just now',
                    sender: msg.sender,
                    direction: msg.sender === 'User' ? 'outgoing' : 'incoming',
                    position: 'single',
                  }}
                />
              ))}
              {isTyping && <Message model={{ message: 'Typing...', sentTime: 'just now', sender: 'ChatGPT', direction: 'incoming', position: 'single' }} />}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default Chat;