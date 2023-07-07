//Subsection.jsx
'use client'


import React, { useState } from 'react';
import DescriptionRow from './DescriptionRow';

const Subsection = ({ id, title, rows, isOpen, toggleSubSectionOpen, getSectionColor, subsectionDaAprire }) => {
    
    const bgColor = getSectionColor(id); // Utilizza getSectionColor per calcolare bgColor

    const toggleOpen = () => {
        toggleSubSectionOpen(id); // Modifica questa linea
    };

     const handleChange = (event) => {
        setValue(event.target.value);
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
                            ? <Subsection key={row.id}
                                {...row}
                                    isOpen={subsectionDaAprire.includes(row.id)} // Modifica questa linea
                                toggleSubSectionOpen={toggleSubSectionOpen} // Aggiungi questa linea
                                subsectionDaAprire={subsectionDaAprire}

                                getSectionColor={getSectionColor}
                  
                            />
                            :     <DescriptionRow 
                                        key={row.id} 
                                        {...row} 
                                        getSectionColor={getSectionColor} // Passing down the function
                                    />
                    )}
                </div>
            )}
        </div>
    );
};

export default Subsection;
