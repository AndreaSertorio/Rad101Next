// pages/api/chatWithOpenAI.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' }); 
  }

  const { model, temperature, messages: chatMessages } = req.body;

  try {
    console.log('Request to OpenAI:', { model, temperature, messages: chatMessages });
    const result = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: model,
      temperature: temperature,
      messages: chatMessages
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 120000
    });

    console.log('Response from OpenAI:', result);
    res.status(200).json(result.data);
  } catch (error) {
    console.error('Error:', error);
    console.error('Full error:', error);
    res.status(error.response?.status || 500).json({ error: error.toString() });
  }
}
