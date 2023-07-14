// components/MessageInput.jsx
import { Input } from 'antd';
import { useState } from 'react';

const { Search } = Input;

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Search
      placeholder="Scrivi un messaggio..."
      enterButton="Invia"
      value={message}
      onChange={e => setMessage(e.target.value)}
      onSearch={handleSend}
    />
  );
};

export default MessageInput;
