import React, { useEffect, useState } from 'react';
import './historybar.css';
import { fetchChatHistory } from '../api/api';

const HistoryBar = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const historyData = await fetchChatHistory();
        setChats(historyData.response);
      } catch (error) {
        console.error('Failed to load chat history:', error);
      } finally {
        setLoading(false);
      }
    };
    loadHistory();
  }, []);

  const truncateText = (text, maxLength = 50) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading) {
    return (
      <div className="historybar-container">
        <h2 className="history-title">Chat History</h2>
        <div className="history-list">
          <p style={{color: '#fff', textAlign: 'center'}}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="historybar-container">
      <h2 className="history-title">Chat History</h2>
      <div className="history-list">
        {chats.length === 0 ? (
          <p style={{color: '#fff', textAlign: 'center'}}>No chat history found</p>
        ) : (
          chats.map(chat => (
            <div
              key={chat._id}
              className="history-item"
              onClick={() => onSelectChat && onSelectChat(chat)}
            >
              <div className="history-info">
                <h4 className="history-chat-title">{truncateText(chat.user)}</h4>
                <p className="history-last-message">{truncateText(chat.bot)}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HistoryBar;
