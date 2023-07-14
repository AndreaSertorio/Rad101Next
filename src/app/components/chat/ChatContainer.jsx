// components/ChatContainer.jsx
import { useState, useEffect } from 'react';
import MessageInput from './MessageInput';
import Message from './Message';
import LoadingIndicator from './LoadingIndicator';
import axios from 'axios';


const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (message) => {
    // Add the user's message to the chat
    setMessages(prevMessages => [...prevMessages, { role: 'user', content: message }]);

    // Show loading indicator
    setLoading(true);

    try {
      // Send message to OpenAI and get response
      const response = await axios.post('/api/chatWithOpenAI', {
        model: 'gpt-3.5-turbo',
        temperature: 0,
        messages: [
          { role: 'system', content: "sei l'assistente di un radiologo esperto e devi aiutarlo a stilare il referto di un esame radiologico." },
          { role: 'user', content: message }
        ]
      });

      // Hide loading indicator
      setLoading(false);

      // Add the AI's response to the chat
      setMessages(prevMessages => [...prevMessages, { role: 'ai', content: response.data['choices'][0]['message']['content'] }]);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      alert(error.message);  // Show the error message to the user
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <Message key={index} role={message.role} content={message.content} />
        ))}
        {loading && <LoadingIndicator />}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
