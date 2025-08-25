import React, { useEffect, useState } from 'react';
import './historybar.css'; // We'll add styles separately

const HistoryBar = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  // Dummy data for now – replace with your MongoDB fetch logic later
  useEffect(() => {
    const mockChats = [
      { id: 1, title: 'Chat with Igris', date: '2025-08-10', lastMessage: 'See you soon!' },
      { id: 2, title: 'Project Discussion', date: '2025-08-09', lastMessage: 'Let’s meet at 5 PM' },
      { id: 3, title: 'Shop Segmentation Idea', date: '2025-08-08', lastMessage: 'We can use clustering' }
    ];
    setChats(mockChats);
  }, []);

  return (
    <div className="historybar-container">
      <h2 className="history-title">Chat History</h2>
      <div className="history-list">
        {chats.map(chat => (
          <div
            key={chat.id}
            className="history-item"
            onClick={() => onSelectChat && onSelectChat(chat.id)}
          >
            <div className="history-info">
              <h4 className="history-chat-title">{chat.title}</h4>
              <p className="history-date">{chat.date}</p>
              <p className="history-last-message">{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryBar;
