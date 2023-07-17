const express = require('express');
const axios = require('axios');
const cors = require('cors');  // Aggiungi questa linea
const app = express();

app.use(cors({
  origin: ['https://radiology101.it', 'https://www.radiology101.it', 'http://localhost:3000']
}));
app.use(express.json());

app.post('/chatWithOpenAI', async (req, res) => {
    const { model, temperature, messages } = req.body;

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

        res.json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
