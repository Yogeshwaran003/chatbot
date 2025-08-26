import React, { useState, useEffect, useRef } from "react";
import ProfileBar from "../components/profilebar.jsx";
import InputBox from "../components/inputbox.jsx";
import MessageBox from "../components/messagebox.jsx";
import Suggestions from "../components/Suggestions.jsx";
import { sendMessage } from "../api/api.js";
import "./chatbox.css";

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: false, suggestions: [] }
  ]);
  const [history, setHistory] = useState([
    { role: "assistant", content: "Hello! How can I help you?" }
  ]);
  
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (newMessage) => {
    if (newMessage.trim() !== "") {
      // Add user message to UI and history
      setMessages((prev) => [...prev, { text: newMessage, sender: true }]);
      const newHistory = [...history, { role: "user", content: newMessage }];
      setHistory(newHistory);
      
      // Add loading message
      setMessages((prev) => [...prev, { text: "Thinking...", sender: false }]);
      
      try {
        const response = await sendMessage(newMessage, newHistory);
        const assistantResponse = response.response || "Sorry, I couldn't process that.";
        const suggestions = response.Suggestion || [];
        
        // Remove loading message and add API response with suggestions
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages.pop(); // Remove "Thinking..." message
          return [...newMessages, { text: assistantResponse, sender: false, suggestions }];
        });
        
        // Update history with assistant response
        setHistory((prev) => [...prev, { role: "assistant", content: assistantResponse }]);
      } catch (error) {
        const errorMessage = "Sorry, something went wrong. Please try again.";
        
        // Remove loading message and add error message
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages.pop(); // Remove "Thinking..." message
          return [...newMessages, { text: errorMessage, sender: false, suggestions: [] }];
        });
        
        // Update history with error response
        setHistory((prev) => [...prev, { role: "assistant", content: errorMessage }]);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSend(suggestion);
  };

  return (
    <div className="chatbox-container">
      <ProfileBar />
      
      <div className="messages-area">
        {messages.map((msg, index) => (
          <div key={index}>
            <MessageBox message={msg.text} sender={msg.sender} />
            {!msg.sender && msg.suggestions && msg.suggestions.length > 0 && (
              <Suggestions 
                suggestions={msg.suggestions} 
                onSuggestionClick={handleSuggestionClick}
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <InputBox onSend={handleSend} />
    </div>
  );
};

export default Chatbox;
