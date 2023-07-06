//Template.jsx

'use client'
import React, { useState } from 'react';
import Section from './Section';
import PropTypes from 'prop-types';


const Template = ({ template, selectedSections = [] , setSelectedSections}) => {
      const [openedSections, setOpenedSections] = useState([]);

  // Funzione per controllare se una sezione è aperta
  const isSectionOpen = (sectionId) => {
    return openedSections.includes(sectionId);
  };
    
      // Funzione per aprire/chiudere una sezione
  const toggleSectionOpen = (sectionId) => {
    let newSelectedSections;
    if (selectedSections.some(section => section.id === sectionId)) {
      newSelectedSections = selectedSections.filter(section => section.id !== sectionId);
    } else {
      newSelectedSections = [...selectedSections, { id: sectionId }];
    }
    setSelectedSections(newSelectedSections);
  };

  // Funzione per ottenere il colore di una sezione
  const getSectionColor = (sectionId) => {
    return selectedSections.some(section => section.id === sectionId) ? 'bg-blue-900' : 'bg-indigo-900';
  };

  return (
    <div data-template-id={template.id} className="bg-gray-600 p-4 rounded-lg shadow-md min-w-full flex-grow">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-4">Organo\Sistema</th>
          </tr>
        </thead>
        <tbody>
          {template.sections.map(section => 
                <Section 
                    key={section.title} 
                    {...section} 
                    selectedSections={selectedSections}
                    setSelectedSections={setSelectedSections} // Passa questa funzione
                    toggleSectionOpen={toggleSectionOpen}
                    sectionColor={getSectionColor(section.id)}
                    getSectionColor={getSectionColor}
                />
          )}
        </tbody>
      </table>

      {/* Visualizza l'elenco selectedSections */}
      <div className="mt-4">
        <h2>Selected Sections:</h2>
        <ul>
          {selectedSections.map((section, index) => 
            <li key={index}>
              {`${section.id} ${section.nome} ${section.sezioneId} ${section.sottosezioneId} ${section.descrizioneId}`}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

Template.propTypes = {
  selectedSections: PropTypes.array,
  template: PropTypes.object,
};

export default Template;
