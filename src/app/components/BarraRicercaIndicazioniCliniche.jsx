// BarraRicercaIndicazioniCliniche.jsx

import React, { useState } from 'react';
import IndicazioniCliniche from './IndicazioniCliniche';

const BarraRicercaIndicazioniCliniche = ({ onSectionSelection, onSectionDeselection }) => {
  const [ricerca, setRicerca] = useState('');

  const handleChange = (event) => {
    setRicerca(event.target.value);
  }

  return (
    <div className="p-4 bg-gray-800 text-white">
      <input 
        type="search" 
        placeholder="Cerca indicazione clinica..." 
        value={ricerca} 
        onChange={handleChange}
        className="w-full px-3 py-2 bg-gray-900 text-white rounded-md" 
      />
          <IndicazioniCliniche 
            ricerca={ricerca} 
            onSectionSelection={onSectionSelection}
            onSectionDeselection={onSectionDeselection} // Assicurati che questa linea sia presente
          />
    </div>
  );
}

export default BarraRicercaIndicazioniCliniche;
