const axios = require('axios');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { model, temperature, messages } = JSON.parse(event.body);

  try {
    const result = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: model,
      temperature: temperature,
      messages: messages
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 120000
    });

    return { statusCode: 200, body: JSON.stringify(result.data) };
  } catch (error) {
    return { statusCode: error.response?.status || 500, body: error.toString() };
  }
};
