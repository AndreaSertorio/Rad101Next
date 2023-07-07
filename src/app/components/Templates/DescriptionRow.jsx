
// DescriptionRow.jsx
'use client'
import React, { useEffect } from 'react';

const DescriptionRow = ({ id, title, description, isOpen, toggleDescRowOpen, getDescRowColor, descRowDaAprire }) => {
    const [value, setValue] = React.useState(description || '');

        useEffect(() => {
        // Quando il componente viene montato, recupera lo stato dal Local Storage
        const savedUserInput = localStorage.getItem(id);
        if (savedUserInput) {
            setValue(savedUserInput);
        }
        }, [id]);
    
    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        // Quando l'input dell'utente cambia, salva nel Local Storage
        localStorage.setItem(id, newValue);
    };

    const bgColor = getDescRowColor(id); // Utilizza getSectionColor per calcolare bgColor

    return (
        <div className={`flex flex-col p-2 text-white rounded-lg shadow-md mr-12 ml-10 ${bgColor}`}>
            <div className="flex justify-between pl-6">
                <span className="font-bold mr-2 cursor-pointer p-1 rounded-lg text-right w-28">{title}:</span>
                <textarea 
                    className="bg-sky-100 text-black flex-grow pl-3 pt-1" 
                    value={value} 
                    onChange={handleChange} 
                    rows="auto" 
                    style={{resize: 'none'}}
                />
            </div>
        </div>
    );
};

export default DescriptionRow;