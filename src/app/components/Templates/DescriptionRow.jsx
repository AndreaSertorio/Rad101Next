'use client'
// DescriptionRow.jsx

import React, { useState } from 'react';
import Subsection from './Subsection';

const DescriptionRow = ({ id, title, description, rows }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(description || '');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const toggleRow = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col mt-4 p-2 bg-blue-500 text-white rounded-lg shadow-md">
            <div className="flex justify-between">
                <span 
                    className="font-bold mr-2 cursor-pointer" 
                    onClick={toggleRow}>
                    {title}:
                </span>
                <textarea 
                    className="bg-blue-300 text-black flex-grow" 
                    value={value} 
                    onChange={handleChange} 
                    rows="auto" 
                    style={{resize: 'none'}}
                />
            </div>
            {isOpen && rows && (
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

export default DescriptionRow;
