// RefertoGpt.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import Spin from 'antd/lib/spin';
import EditableFieldsContext from '../../contexts/EditableFieldsContext';
import additionalText from './Referti/tcEncefalo';
import { Select, Slider } from 'antd';

const { Option } = Select;

const RefertoGpt = () => {
  const { editableFields } = useContext(EditableFieldsContext);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState('gpt-3.5-turbo');
  const [temperature, setTemperature] = useState(0);

  const sendToOpenAI = async (message) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/chatWithOpenAI', {
        model,
        temperature,
        messages: [
          { role: 'system', content: "sei l'assistente di un radiologo esperto e devi aiutarlo a stilare il referto di un esame radiologico di una TC encefalo, di seguito ti fornirò cio che il radiologo ha trovato di alterato nell'esame odierno, saranno tra parentesi {}, se non c'è niente, l'esame è da considerarsi negativo; troverai di seguito una serie di esempi di referti di tc encefalo da cui prendere spunto, non devono essere identici, prendi spunto per la terminologia e la formattazione del testo e l'impostazione delle frasi, per scrivere al meglio i reperti che il radiologo ha trovato nell'esame odierno, ecco i reperti e poi gli esempi:" },
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
    console.log(dataString, additionalText);
    console.log(model,temperature);
    sendToOpenAI(dataString);
  };

  return (
    <div className="shadow-lg p-6 bg-sky-200 rounded-lg text-black" style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
        <div>
          <p>Scegli il modello:</p>
          <Select defaultValue={model} style={{ width: 180 }} onChange={setModel}>
            <Option value="gpt-4">gpt-4</Option>
            <Option value="gpt-4-0613">gpt-4-0613</Option>
            <Option value="gpt-4-32k">gpt-4-32k</Option>
            <Option value="gpt-4-32k-0613">gpt-4-32k-0613</Option>
            <Option value="gpt-3.5-turbo">gpt-3.5-turbo</Option>
            <Option value="gpt-3.5-turbo-0613">gpt-3.5-turbo-0613</Option>
            <Option value="gpt-3.5-turbo-16k">gpt-3.5-turbo-16k</Option>
            <Option value="gpt-3.5-turbo-16k-0613">gpt-3.5-turbo-16k-0613</Option>
          </Select>
        </div>
        <div style={{ margin: '20px 0' }}>
          <p>Imposta la temperatura:</p>
          <Slider min={0} max={1} step={0.1} defaultValue={temperature} onChange={setTemperature} style={{ maxWidth: '200px' }} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Invia a OpenAI</button>
      </div>
      <div className="mt-4 border-t border-gray-200 pt-4" style={{ flex: 1 }}>
        {loading ? <Spin /> : <div>{response}</div>}
      </div>
    </div>
  );






};

export default RefertoGpt;
