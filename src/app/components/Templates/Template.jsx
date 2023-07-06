//Template.jsx

'use client'
import React from 'react';
import Section from './Section';
import PropTypes from 'prop-types';

const Template = ({ template, selectedSections }) => {
  // Funzione per controllare se una sezione è aperta
  const isSectionOpen = (sectionId) => {
    return selectedSections.some(section => section.id === sectionId);
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
                selectedItems={selectedSections || []} 
                isSectionOpen={isSectionOpen} // Qui è dove dovresti passare la funzione
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
