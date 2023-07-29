// RefertoGptHeroku.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import EditableFieldsContext from '../../contexts/EditableFieldsContext';
import additionalText from './Referti/tcEncefalo_corto';
import Select from 'antd/lib/select';
import Slider from 'antd/lib/slider';
import Checkbox from 'antd/lib/checkbox';
import Spin from 'antd/lib/spin';

const { Option } = Select;

const RefertoGptHeroku = () => {
  const { editableFields } = useContext(EditableFieldsContext);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState('gpt-3.5-turbo');
  const [temperature, setTemperature] = useState(0);
  const [includeAdditionalText, setIncludeAdditionalText] = useState(false);
  const [usage, setUsage] = useState({}); // Initialize usage as null

  // Define the API URL as the Heroku app URL
  const apiURL = 'https://rad101next-36200d4dfbbe.herokuapp.com/chatWithOpenAI';


  const sendToOpenAI = async (message) => {
    setLoading(true);
    try {
      const payload = {
        model,
        temperature,
        messages: [
          { role: 'system', content: "sei l'assistente di un radiologo esperto e devi aiutarlo a stilare il referto di un esame radiologico di una TC encefalo, di seguito ti fornirò cio che il radiologo ha trovato di alterato nell'esame odierno, saranno tra parentesi {}, se non c'è niente, l'esame è da considerarsi negativo; troverai di seguito una serie di esempi di referti di tc encefalo da cui prendere spunto, non devono essere identici, prendi spunto per la terminologia e la formattazione del testo e l'impostazione delle frasi, per scrivere al meglio i reperti che il radiologo ha trovato nell'esame odierno, ecco i reperti e poi gli esempi:" },
          { role: 'user', content: message }
        ]
      };
      console.log('Sending the following payload to OpenAI:', payload);  // Log the payload
      const response = await axios.post(apiURL, payload, { timeout: 120000 });
      setResponse(response.data['choices'][0]['message']['content']);
      setUsage(response.data.usage); // Save usage data

    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
    setLoading(false);
  };
 const handleButtonClick = () => {
      const dataString = JSON.stringify(editableFields, null, 2);
      const finalMessage = includeAdditionalText ? `${dataString}\n\n${additionalText}` : dataString;
   console.log(finalMessage);
    console.log(model,temperature);
    sendToOpenAI(finalMessage);
  };


    return (
      <div className="shadow-lg p-6 bg-sky-200 rounded-lg text-black" style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
          <div>
            <p>Scegli il modello:</p>
            <Select defaultValue={model} style={{ width: 180 }} onChange={setModel}>
              <Option value="gpt-4">gpt-4</Option>
              <Option value="gpt-4-0613">gpt-4-0613</Option>
              {/* <Option value="gpt-4-32k">gpt-4-32k</Option>
              <Option value="gpt-4-32k-0613">gpt-4-32k-0613</Option> */}
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
        <div style={{ margin: '20px 0' }}>
          <Checkbox checked={includeAdditionalText} onChange={e => setIncludeAdditionalText(e.target.checked)}>Includi esempi</Checkbox>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Invia a OpenAI</button>
        {/* Display usage data */}
        <div style={{ marginTop: '20px' }}>
          <p><strong>Usage Data:</strong></p>
          <p>Prompt Tokens: {usage.prompt_tokens}</p>
          <p>Completion Tokens: {usage.completion_tokens}</p>
          <p>Total Tokens: {usage.total_tokens}</p>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-200 pt-4" style={{ flex: 1 }}>
        {loading ? <Spin /> : <div>{response}</div>}
      </div>
    </div>
  );
};

export default RefertoGptHeroku;
