import React, { useState, useEffect, useRef } from "react";
import ProfileBar from "../components/profilebar.jsx";
import InputBox from "../components/inputbox.jsx";
import MessageBox from "../components/messagebox.jsx";
import { sendMessage } from "../api/api.js";
import "./chatbox.css";

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: false }
  ]);
  
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (newMessage) => {
    if (newMessage.trim() !== "") {
      // Add user message
      setMessages((prev) => [...prev, { text: newMessage, sender: true }]);
      
      // Add loading message
      setMessages((prev) => [...prev, { text: "Thinking...", sender: false }]);
      
      try {
        const response = await sendMessage(newMessage);
        // Remove loading message and add API response
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages.pop(); // Remove "Thinking..." message
          return [...newMessages, { text: response.response || "Sorry, I couldn't process that.", sender: false }];
        });
      } catch (error) {
        // Remove loading message and add error message
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages.pop(); // Remove "Thinking..." message
          return [...newMessages, { text: "Sorry, something went wrong. Please try again.", sender: false }];
        });
      }
    }
  };

  return (
    <div className="chatbox-container">
      <ProfileBar />
      
      <div className="messages-area">
        {messages.map((msg, index) => (
          <MessageBox key={index} message={msg.text} sender={msg.sender} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <InputBox onSend={handleSend} />
    </div>
  );
};

export default Chatbox;
