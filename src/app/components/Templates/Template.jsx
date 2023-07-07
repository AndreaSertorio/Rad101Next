//Template.jsx

'use client'
import React, { useState, useEffect } from 'react';
import Section from './Section';
import PropTypes from 'prop-types';


const Template = ({ template, selectedSections = [] }) => {
    const [sectionDaAprire, setSectionDaAprire] = useState([]);
    const [subsectionDaAprire, setSubSectionDaAprire] = useState([]);
            const [descRowDaAprire, setDescRowDaAprire] = useState([]);


    useEffect(() => {
        // Imposta sectionDaAprire con gli id delle sezioni in selectedSections
        setSectionDaAprire(selectedSections.map(section => section.sezioneId));
        setSubSectionDaAprire(selectedSections.map(section => section.sottosezioneId));
        setDescRowDaAprire(selectedSections.map(section => section.descRowId));
    }, [selectedSections]);
    // console.log(sectionDaAprire.flat());
    // console.log(subsectionDaAprire.flat());
    // console.log(descRowDaAprire.flat());
    
      // Funzione per aprire/chiudere una sezione
    const toggleSectionOpen = (sectionId) => {
        let newSectionDaAprire;
        if (sectionDaAprire.flat().includes(sectionId)) {
            newSectionDaAprire = sectionDaAprire.flat().filter(id => id !== sectionId);
        } else {
            newSectionDaAprire = [...sectionDaAprire.flat(), sectionId];
        }
        setSectionDaAprire(newSectionDaAprire);
    };
          // Funzione per aprire/chiudere una sottosezione
    const toggleSubSectionOpen = (subsectionId) => {
        let newSubSectionDaAprire;
        if (subsectionDaAprire.flat().includes(subsectionId)) {
            newSubSectionDaAprire = subsectionDaAprire.flat().filter(id => id !== subsectionId);
        } else {
            newSubSectionDaAprire = [...subsectionDaAprire.flat(), subsectionId];
        }
        setSubSectionDaAprire(newSubSectionDaAprire);
    };
              // Funzione per visualizzare o meno  una descriptionRow
    const toggleDescRowOpen = (descRowId) => {
        let newDescRowDaAprire;
        if (descRowDaAprire.flat().includes(descRowId)) {
            newDescRowDaAprire = descRowDaAprire.flat().filter(id => id !== descRowId);
        } else {
            newDescRowDaAprire = [...descRowDaAprire.flat(), descRowId];
        }
        setDescRowDaAprire(newDescRowDaAprire);
    };

    // Funzione per ottenere il colore di una sezione
    const getSectionColor = (sectionId) => {
        return sectionDaAprire.flat().includes(sectionId) ? 'bg-blue-900' : 'bg-indigo-900';
    };
        // Funzione per ottenere il colore di una sottosezione
    const getSubSectionColor = (subsectionId) => {
        return subsectionDaAprire.flat().includes(subsectionId) ? 'bg-blue-900' : 'bg-indigo-900';
    };
            // Funzione per ottenere il colore di una DescrRow
    const  getDescRowColor = (descRowId) => {
        return descRowDaAprire.flat().includes(descRowId) ? 'bg-blue-900' : 'bg-indigo-900';
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
                    isOpen={sectionDaAprire.flat().includes(section.id)} // Passa questa prop a Section
                    toggleSectionOpen={toggleSectionOpen} // Passa questa funzione a Section
                    subsectionDaAprire={subsectionDaAprire} // Aggiungi questa linea
                    toggleSubSectionOpen={toggleSubSectionOpen} // Aggiungi questa linea
                    sectionColor={getSectionColor(section.id)}
                  getSectionColor={getSectionColor}
                  getSubSectionColor={getSubSectionColor}
                  getDescRowColor={getDescRowColor}
                  toggleDescRowOpen={toggleDescRowOpen}
                  descRowDaAprire={descRowDaAprire}
                
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
