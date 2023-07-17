// pages/api/chatWithOpenAI.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' }); 
  }

  const { model, temperature, messages: chatMessages } = req.body;

  try {
    const result = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: model,
      temperature: temperature,
      messages: chatMessages
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log(result.data);
    res.status(200).json(result.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    console.error('Full error:', error);
    res.status(error.response?.status || 500).json({ error: error.toString() });
  }

}
