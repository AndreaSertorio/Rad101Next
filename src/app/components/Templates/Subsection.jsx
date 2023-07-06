// Subsection.jsx
'use client'
import React, { useState } from 'react';
import DescriptionRow from './DescriptionRow';

const Subsection = ({ id, title, rows }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubsection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col ml-4">
            <div className="w-40 h-16 flex rounded-lg border-2 border-white  text-center justify-center items-center" onClick={toggleSubsection}>
                {title}
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

export default Subsection;
