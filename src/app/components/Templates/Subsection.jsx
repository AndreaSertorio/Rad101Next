// Subsection.jsx
'use client'
import React, { useState, useEffect } from 'react';
import DescriptionRow from './DescriptionRow';

const Subsection = ({ id, title, rows, selectedSections = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (selectedSections.includes(id)) {
            setIsOpen(true);
        }
    }, [selectedSections, id]);

    const toggleSubsection = () => {
        setIsOpen(!isOpen);
    };

const bgColor = selectedSections && selectedSections.includes(id) ? 'bg-green-900' : '';

    return (
        <div className={`flex flex-col ml-4 ${bgColor}`}>
            <div className="w-40 h-16 flex rounded-lg border-2 border-white  text-center justify-center items-center" onClick={toggleSubsection}>
                {title}
            </div>

            {isOpen && rows && (
                <div className="ml-4 w-full flex flex-col">
                    {rows.map(row => 
                        row.rows 
                            ? <Subsection key={row.id} {...row} selectedSections={selectedSections} />
                            : <DescriptionRow key={row.id} {...row} selectedSections={selectedSections} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Subsection;
