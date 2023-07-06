//Subsection.jsx
'use client'


import React, { useState } from 'react';
import DescriptionRow from './DescriptionRow';

const Subsection = ({ id, title, rows, selectedSections = [], isSectionOpen, getSectionColor }) => {
    const [isOpen, setIsOpen] = useState(false); // Aggiunto questo stato

    const bgColor = selectedSections.some(section => section.id === id) ? 'bg-green-900' : '';

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex flex-col ml-4 ${bgColor}`}>
            <div className="w-40 h-16 flex rounded-lg border-2 border-white text-center justify-center items-center" onClick={toggleOpen}>
                {title}
            </div>

            {isOpen && rows && (  // qui usiamo isOpen invece di isSectionOpen
                <div className="ml-4 w-full flex flex-col">
                    {rows.map(row => 
                        row.rows 
                            ? <Subsection key={row.id} {...row} selectedSections={selectedSections} isSectionOpen={isSectionOpen} getSectionColor={getSectionColor}/>
                            :     <DescriptionRow 
                                        key={row.id} 
                                        {...row} 
                                        selectedSections={selectedSections} 
                                        isSectionOpen={isSectionOpen} 
                                        getSectionColor={getSectionColor} // Passing down the function
                                    />
                    )}
                </div>
            )}
        </div>
    );
};

export default Subsection;
