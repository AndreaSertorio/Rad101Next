// Section.jsx
'use client'
import React, { useState } from 'react';
import DescriptionTable from './DescriptionTable';

const Section = ({ id, title, rows }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <tr id={id} className="border-black border-t-2 my-4 rounded-lg shadow-lg bg-indigo-900">
            <td 
                className="font-bold cursor-pointer p-4 border-b-2" 
                onClick={toggleSection}>
                {title}
            </td>
            <td className={isOpen ? "cursor-text opacity-50" : "cursor-text"}>
                {isOpen && <DescriptionTable rows={rows} />}
            </td>
        </tr>
    );
};

export default Section;
