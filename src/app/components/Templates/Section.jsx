// Section.jsx
'use client'
import React, { useState } from 'react';
import DescriptionTable from './DescriptionTable';

const Section = ({ id, title, description, rows }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(description || '');

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div id={id} className="flex flex-col border-black border-t-2 my-4 rounded-lg shadow-lg bg-indigo-900">
            <div 
                className="flex justify-between font-bold cursor-pointer p-4 border-b-2" 
                onClick={toggleSection}>
                <span>{title}</span>
                <textarea 
                    className="bg-blue-300 text-black flex-grow ml-8 " 
                    value={value} 
                    onChange={handleChange} 
                    rows="auto" 
                    style={{resize: 'none', minHeight: '1em', maxHeight: '3em'}}
                />
            </div>
            {isOpen && <DescriptionTable rows={rows} />}
        </div>
    );
};

export default Section;
