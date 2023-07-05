// Subsection.jsx
'use client'
import React, { useState } from 'react';
import DescriptionTable from './DescriptionTable';

const Subsection = ({ title, rows }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubsection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col ml-4">
            <div 
                className="font-bold cursor-pointer p-4 border-b-2" 
                onClick={toggleSubsection}>
                {title}
            </div>
            {isOpen && <DescriptionTable rows={rows} />}
        </div>
    );
};

export default Subsection;
