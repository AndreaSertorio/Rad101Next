// IndicazioniCliniche.jsx
import React, { useState, useEffect } from 'react';

const IndicazioniCliniche = ({ ricerca = '' }) => {
  const indicazioniIniziali = [
    { nome: 'Trauma Cranico' },
    { nome: 'Cefalea Nuova o Cambiata' },
    { nome: 'Perdita di Coscienza' },
    { nome: 'Deficit Neurologici Focali Acuti (es. afasia, emiparesi)' },
    { nome: 'Segni di Aumento della Pressione Intracranica (es. vomito, edema del nervo ottico)' },
    { nome: 'Convulsioni, specialmente se nuove o inusuali' },
    { nome: 'Sospetta Infezione del Sistema Nervoso Centrale (es. meningite, ascesso)' },
    { nome: 'Monitoraggio di Patologie Conosciute (es. tumori)' },
    { nome: 'Valutazione Pre-Operativa o Pre-Procedurale' },
  ];
  const [indicazioni, setIndicazioni] = useState(indicazioniIniziali);
  const [risultatiRicerca, setRisultatiRicerca] = useState(indicazioniIniziali);

  useEffect(() => {
    if (ricerca === '') {
      setRisultatiRicerca(indicazioni);
    } else {
      setRisultatiRicerca(
        indicazioni.filter(indicazione =>
          indicazione.nome.toLowerCase().includes(ricerca.toLowerCase())
        )
      );
    }
  }, [ricerca, indicazioni]);

  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2>Indicazioni Cliniche</h2>
      <form>
        {risultatiRicerca.map((indicazione, index) => (
          <div className="mb-4" key={index}>
            <input type="checkbox" id={`indicazione${index}`} name={`indicazione${index}`} />
            <label htmlFor={`indicazione${index}`}> {indicazione.nome}</label><br/>
          </div>
        ))}
      </form>
    </div>
  );
}

export default IndicazioniCliniche;
