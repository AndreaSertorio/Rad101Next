const { PineconeStore } = require('langchain/vectorstores/pinecone');
const { OpenAIEmbeddings } = require('langchain/embeddings/openai');
const { makeChain } = require('./utils/makechain'); // Assicurati che il percorso sia corretto
const { pinecone } = require('./utils/pinecone-client'); // Assicurati che il percorso sia corretto
const { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } = require('./config/pinecone'); // Assicurati che il percorso sia corretto

async function handler(req, res) {
  const { question, history } = req.body;
  console.log('question', question);

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!question) {
    return res.status(400).json({ message: 'No question in the request' });
  }

  const sanitizedQuestion = question.trim().replace(/\n/g, ' ');

  try {
    const index = pinecone.Index(PINECONE_INDEX_NAME);

    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings({}),
      {
        pineconeIndex: index,
        textKey: 'text',
        namespace: PINECONE_NAME_SPACE,
      },
    );

    const chain = makeChain(vectorStore);

    const response = await chain.call({
      question: sanitizedQuestion,
      chat_history: history || [],
    });

    console.log('response', response);
    res.status(200).json(response);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
}

module.exports = { handler };
