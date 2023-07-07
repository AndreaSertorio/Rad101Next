
//Section.jsx
'use client'
import React, { useState, useEffect } from 'react';
import Subsection from './Subsection';
import DescriptionRow from './DescriptionRow';
import PropTypes from 'prop-types';

const Section = ({ id, title, description, rows, isSelected, isOpen, toggleSectionOpen, getSectionColor, subsectionDaAprire, toggleSubSectionOpen, toggleDescRowOpen, getDescRowColor, descRowDaAprire, getSubSectionColor}) => {
    const [value, setValue] = useState(description || '');

        const handleChange = (event) => {
        setValue(event.target.value);
    };

        // This useEffect will ensure that the section opens/closes based on the selectedSections


            // all'interno del componente Section
    const toggleSection = () => {
        toggleSectionOpen(id);
    };


    // Modifica il colore di sfondo in base allo stato di selezione
    const bgColor = isSelected ? 'bg-blue-900' : 'bg-indigo-900';

    return (
        <tr id={id} className={`flex flex-col border-black border-t-2 my-1 rounded-lg shadow-lg ${bgColor}`}>
            <td 
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
            </td>
            {isOpen && (
                <td className="ml-4 w-full flex flex-col">
                    {rows.map(row => 
                        row.rows 
                        ? <Subsection 
                            key={row.id} 
                            {...row} 
                            isOpen={subsectionDaAprire.flat().includes(row.id)} // Modifica questa linea
                            toggleSubSectionOpen={toggleSubSectionOpen} // Aggiungi questa linea
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
                </td>
            )}
        </tr>
    );
};

Section.propTypes = {
    id: PropTypes.oneOfType([    PropTypes.number,    PropTypes.string  ]).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    rows: PropTypes.array,
    isSelected: PropTypes.bool,
    isOpen: PropTypes.bool,
    toggleSectionOpen: PropTypes.func,
    getSectionColor: PropTypes.func,
};

export default Section;
