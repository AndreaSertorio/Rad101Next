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
        <div>
            <button onClick={handleButtonClick}>Invia a OpenAI</button>
            {loading ? <Spin tip="Caricamento..." /> : <div>{response}</div>}
        </div>
    );
};

export default RefertoGpt;
