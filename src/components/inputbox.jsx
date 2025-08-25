import React, { useState } from 'react';
import './InputBox.css';
import { FaPaperPlane, FaPaperclip, FaTimes } from 'react-icons/fa';

const InputBox = ({ onSend, onFileUpload }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
    if (file) {
      onFileUpload(file);
      setFile(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => setFile(null);

  return (
    <div className="chat-input-container">
      {/* Hidden file input */}
      <input
        type="file"
        id="file-upload"
        className="file-input"
        accept=".doc,.docx,.ppt,.pptx,.pdf"
        onChange={handleFileChange}
      />

      {/* Upload button */}
      <label htmlFor="file-upload" className="upload-btn">
        <FaPaperclip />
      </label>

      <div className="input-with-preview">
        {/* Text input */}
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        {/* File preview */}
        {file && (
          <div className="file-preview">
            <span className="file-name">{file.name}</span>
            <FaTimes className="remove-file" onClick={removeFile} />
          </div>
        )}
      </div>

      {/* Send button */}
      <button className="send-btn" onClick={handleSend}>
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default InputBox;
