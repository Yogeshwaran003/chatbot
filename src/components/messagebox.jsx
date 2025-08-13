import './MessageBox.css';

const MessageBox = ({ message, sender }) => {
  return (
    <div className={`message-container ${sender ? 'sender' : 'receiver'}`}>
      <div className={`message-bubble ${sender ? 'sender' : 'receiver'}`}>
        {message}
      </div>
    </div>
  ); 
};

export default MessageBox;
