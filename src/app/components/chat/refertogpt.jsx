// RefertoGpt.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import Spin from 'antd/lib/spin';
import EditableFieldsContext from '../../contexts/EditableFieldsContext';

const RefertoGpt = () => {
    const { editableFields } = useContext(EditableFieldsContext);
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const sendToOpenAI = async (message) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/chatWithOpenAI', {
                model: 'gpt-3.5-turbo',
                temperature: 0,
                messages: [
                    { role: 'system', content: "sei l'assistente di un radiologo esperto e devi aiutarlo a stilare il referto di un esame radiologico." },
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
