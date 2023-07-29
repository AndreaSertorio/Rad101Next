// components/ChatContainer.jsx
import { useState, useEffect } from 'react';
import MessageInput from './MessageInput';
import Message from './Message';
import LoadingIndicator from './LoadingIndicator';
import axios from 'axios';
import Select from 'antd/lib/select';
import Slider from 'antd/lib/slider';
import Card from 'antd/lib/card';
import Divider from 'antd/lib/divider';


const { Option } = Select;


// Definisci l'URL dell'API come l'URL dell'app Heroku
  const apiURL = 'https://rad101next-36200d4dfbbe.herokuapp.com/chatWithOpenAI';

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState('gpt-3.5-turbo');
  const [temperature, setTemperature] = useState(0);
  const [maxTokens, setMaxTokens] = useState(100);  // Default to 100 tokens



  const handleSendMessage = async (message) => {
    // Add the user's message to the chat
    setMessages(prevMessages => [...prevMessages, { role: 'user', content: message }]);

    // Show loading indicator
    setLoading(true);

    try {
      // Send message to OpenAI and get response
      const response = await axios.post(apiURL, {
        model,
        temperature,
        max_tokens: maxTokens,
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
    <Card style={{ marginBottom: '20px' }}>
      <h2>Impostazioni OpenAI</h2>
      <Divider />

      <h4>Modello</h4>
      <Select defaultValue={model} style={{ width: 180 }} onChange={setModel}>
        <Option value="gpt-4">gpt-4</Option>
        <Option value="gpt-3.5-turbo">gpt-3.5-turbo</Option>
        <Option value="gpt-3.5-turbo-16k">gpt-3.5-turbo-16k</Option>
      </Select>

      <Divider />

      <h4>Temperatura</h4>
      <Slider min={0} max={1} step={0.1} defaultValue={temperature} onChange={setTemperature} style={{ maxWidth: '200px' }} />

      <Divider />

      <h4>Numero massimo di token</h4>
      <Slider min={1} max={4096} step={1} defaultValue={maxTokens} onChange={setMaxTokens} style={{ maxWidth: '200px' }} />
    </Card>

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
