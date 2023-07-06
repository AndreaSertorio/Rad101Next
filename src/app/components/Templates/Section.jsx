
//Section.jsx
'use client'
import React, { useState, useEffect } from 'react';
import Subsection from './Subsection';
import DescriptionRow from './DescriptionRow';
import PropTypes from 'prop-types';

const Section = ({ id, title, description, rows, selectedSections, isSectionOpen, getSectionColor }) => {
    const [value, setValue] = useState(description || '');
    const [isSelected, setIsSelected] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        if (selectedSections && selectedSections.some(section => section.id === id)) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [selectedSections, id]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

            // all'interno del componente Section
        const toggleSection = () => {
            setIsOpen(!isOpen);
        };


    // Modifica il colore di sfondo in base allo stato di selezione
    const bgColor = isSelected ? 'bg-blue-900' : 'bg-indigo-900';

    return (
        <div id={id} className={`flex flex-col border-black border-t-2 my-1 rounded-lg shadow-lg ${bgColor}`}>
            <div 
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
            </div>
                {isOpen && (
                    <div className="ml-4 w-full flex flex-col">
                        {rows.map(row => 
                            row.rows 
                           ? <Subsection 
                                  key={row.id} 
                                  {...row} 
                                  selectedSections={selectedSections} 
                                  isSectionOpen={isSectionOpen} 
                                  getSectionColor={getSectionColor} // Passing down the function
                              />
                            : <DescriptionRow 
                                  key={row.id} 
                                  {...row} 
                                  selectedSections={selectedSections} 
                                  isSectionOpen={isSectionOpen}
                                  getSectionColor={getSectionColor} // Add this line
                              />
                    )}
                    </div>
                )}


        </div>
    );
};

Section.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  rows: PropTypes.array,
  selectedSections: PropTypes.array,
  isSectionOpen: PropTypes.func,
};

export default Section;