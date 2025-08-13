import React, { useState } from 'react';
import './InputBox.css';
import { FaPaperPlane } from 'react-icons/fa';

const InputBox = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        className="chat-input"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="send-btn" onClick={handleSend}>
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default InputBox;
