//Subsection.jsx
'use client'


import React, { useState } from 'react';
import DescriptionRow from './DescriptionRow';

const Subsection = ({ id, title, rows, isOpen, toggleSubSectionOpen, getSubSectionColor, subsectionDaAprire, toggleDescRowOpen, getDescRowColor, descRowDaAprire }) => {
    
    const bgColor = getSubSectionColor(id); // Utilizza getSectionColor per calcolare bgColor

    const toggleOpen = () => {
        toggleSubSectionOpen(id);
    };

     const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={`flex flex-col ml-4 ${bgColor}`}>
            <div className="w-40 h-16 flex rounded-lg border-2 border-white text-center justify-center items-center" onClick={toggleOpen}>
                {title}
            </div>

            {isOpen && rows && (  
                <div className="ml-4 w-full flex flex-col">
                    {rows.map(row => 
                        row.rows 
                            ? <Subsection key={row.id}
                                {...row}
                                    isOpen={subsectionDaAprire.flat().includes(row.id)}
                                toggleSubSectionOpen={toggleSubSectionOpen}
                                subsectionDaAprire={subsectionDaAprire}
                                getSubSectionColor={getSubSectionColor}
                                getDescRowColor={getDescRowColor}
                                toggleDescRowOpen={toggleDescRowOpen}
                                descRowDaAprire={descRowDaAprire}                  
                            />
                            :     <DescriptionRow 
                                        key={row.id} 
                                {...row} 
                                        isOpen={descRowDaAprire.flat().includes(row.id)}
                                        getDescRowColor={getDescRowColor}
                                        toggleDescRowOpen={toggleDescRowOpen}
                                        descRowDaAprire={descRowDaAprire}
                                    />
                    )}
                </div>
            )}
        </div>
    );
};

export default Subsection;
