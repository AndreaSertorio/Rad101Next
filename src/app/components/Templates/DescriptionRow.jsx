
// DescriptionRow.jsx
'use client'
import React from 'react';

const DescriptionRow = ({ id, title, description, isOpen, toggleDescRowOpen, getDescRowColor, descRowDaAprire }) => {
    const [value, setValue] = React.useState(description || '');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const bgColor = getDescRowColor(id); // Utilizza getSectionColor per calcolare bgColor

    return (
        <div className={`flex flex-col p-2 text-white rounded-lg shadow-md mr-12 ml-10 ${bgColor}`}>
            <div className="flex justify-between pl-6">
                <span className="font-bold mr-2 cursor-pointer p-1 rounded-lg text-right w-28">{title}:</span>
                <textarea 
                    className="bg-blue-300 text-black flex-grow pl-3 pt-1" 
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