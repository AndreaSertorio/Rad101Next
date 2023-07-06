// Section.jsx
'use client'
// Section.jsx
import React, { useState } from 'react';
import Subsection from './Subsection';
import DescriptionRow from './DescriptionRow';

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
        <div id={id} className="flex flex-col border-black border-t-2 my-1 rounded-lg shadow-lg bg-indigo-900">
            <div 
                className="flex justify-between font-bold cursor-pointer p-2 border-b-2" 
                onClick={toggleSection}>
                 <span className="w-40 p-1 rounded-lg border-2 border-gray-400 items-center">{title}</span>
                <textarea 
                    className="bg-blue-300 text-black flex-grow ml-8 pl-3 pt-1" 
                    value={value} 
                    onChange={handleChange} 
                    rows="auto" 
                    style={{resize: 'none', minHeight: '1em', maxHeight: '20em'}}
                />
            </div>
            {isOpen && (
                <div className="ml-4 w-full flex flex-col">
                    {rows.map(row => 
                        row.rows 
                            ? <Subsection key={row.id} {...row} />
                            : <DescriptionRow key={row.id} {...row} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Section;
