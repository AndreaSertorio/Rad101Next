//Template.jsx

'use client'
import React, { useState, useEffect } from 'react';
import Section from './Section';
import PropTypes from 'prop-types';


const Template = ({ template, selectedSections = [], setSelectedSections }) => {
    const [sectionDaAprire, setSectionDaAprire] = useState([]);
        const [subsectionDaAprire, setSubSectionDaAprire] = useState([]);

      console.log(sectionDaAprire);
    useEffect(() => {
        // Imposta sectionDaAprire con gli id delle sezioni in selectedSections
        setSectionDaAprire(selectedSections.map(section => section.sezioneId));
        setSubSectionDaAprire(selectedSections.map(section => section.sottosezioneId));
    }, [selectedSections]);

      // Funzione per aprire/chiudere una sezione
    const toggleSectionOpen = (sectionId) => {
        let newSectionDaAprire;
        if (sectionDaAprire.includes(sectionId)) {
            newSectionDaAprire = sectionDaAprire.filter(id => id !== sectionId);
        } else {
            newSectionDaAprire = [...sectionDaAprire, sectionId];
        }
        setSectionDaAprire(newSectionDaAprire);
    };
          // Funzione per aprire/chiudere una sottosezione
    const toggleSubSectionOpen = (subsectionId) => {
        let newSubSectionDaAprire;
        if (sectionDaAprire.includes(subsectionId)) {
            newSubSectionDaAprire = subsectionDaAprire.filter(id => id !== subsectionId);
        } else {
            newSubSectionDaAprire = [...subsectionDaAprire, subsectionId];
        }
        setSubSectionDaAprire(newSubSectionDaAprire);
    };

    // Funzione per ottenere il colore di una sezione
    const getSectionColor = (sectionId) => {
        return sectionDaAprire.includes(sectionId) ? 'bg-blue-900' : 'bg-indigo-900';
    };
        // Funzione per ottenere il colore di una sottosezione
    const getSubSectionColor = (sectionId) => {
        return subsectionDaAprire.includes(subsectionId) ? 'bg-blue-900' : 'bg-indigo-900';
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
                    isOpen={sectionDaAprire.includes(section.id)} // Passa questa prop a Section
                    toggleSectionOpen={toggleSectionOpen} // Passa questa funzione a Section
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
