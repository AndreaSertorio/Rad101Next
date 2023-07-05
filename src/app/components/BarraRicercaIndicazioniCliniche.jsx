// BarraRicerca.jsx
import React, { useState } from 'react';
import IndicazioniCliniche from './IndicazioniCliniche';

const BarraRicercaIndicazioniCliniche = () => {
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
      <IndicazioniCliniche ricerca={ricerca} />
    </div>
  );
}

export default BarraRicercaIndicazioniCliniche;
