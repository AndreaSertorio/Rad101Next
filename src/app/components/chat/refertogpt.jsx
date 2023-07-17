// RefertoGpt.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import Spin from 'antd/lib/spin';
import EditableFieldsContext from '../../contexts/EditableFieldsContext';
import additionalText from './Referti/tcEncefalo';

const RefertoGpt = () => {
  const { editableFields } = useContext(EditableFieldsContext);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendToOpenAI = async (message) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/chatWithOpenAI', {
        model: 'gpt-4',
        temperature: 0,
        messages: [
          { role: 'system', content: "sei l'assistente di un radiologo esperto e devi aiutarlo a stilare il referto di un esame radiologico di una TC encefalo, di seguito ti fornirò cio che il radiologo ha trovato di alterato nell'esame odierno, saranno tra parentesi {}, se non c'è niente, l'esame è da considerarsi negativo; troverai di seguito una serie di esempi di referti di tc encefalo da cui prendere spunto, non devono essere identici, prendi spunto per la terminologia e la formattazione del testo e l'impostazione delle frasi, per scrivere al meglio i reperti che il radiologo ha trovato nell'esame odierno, ecco i reperti e poi gli esempi:" },
          // { role: 'user', content: `${message}\n\n${additionalText}` }
                    { role: 'user', content: message }

        ]
      });
      
      setResponse(response.data['choices'][0]['message']['content']);
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
    setLoading(false);
  };

  const handleButtonClick = () => {
      const dataString = JSON.stringify(editableFields, null, 2);
      console.log(dataString,additionalText);
    sendToOpenAI(dataString);
  };

  return (
    <div className="shadow-lg p-6 bg-sky-200 rounded-lg text-black">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Invia a OpenAI</button>
      <div className="mt-4 border-t border-gray-200 pt-4">
        {loading ? <Spin /> : <div>{response}</div>}
      </div>
    </div>
  );
};

export default RefertoGpt;
