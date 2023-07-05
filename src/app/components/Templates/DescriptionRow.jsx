// DescriptionRow.jsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link'

const DescriptionRow = ({ title, description }) => {
    const [value, setValue] = useState(description || '');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="flex mt-4 p-2 bg-blue-500 text-white rounded-lg shadow-md">
            <Link passHref href={`/details/${title}`}>
              <span className="font-bold mr-2 cursor-pointer">{title}:</span>
            </Link>
            <textarea 
                className="bg-blue-300 text-black flex-grow" 
                value={value} 
                onChange={handleChange} 
                rows="auto" 
                style={{resize: 'none'}}
            />
        </div>
    );
};

export default DescriptionRow;
