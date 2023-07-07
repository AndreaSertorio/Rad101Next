// IndicazioniCliniche.jsx
import React, { useState, useEffect } from 'react';

const IndicazioniCliniche = ({ ricerca = '', onSectionSelection, onSectionDeselection }) => {
const indicazioniIniziali = [
  { id: 1, nome: 'Trauma Cranico', sezioneId: ['Parenchima_Cerebrale', 'Massa_Cerebrale', 'Shift_Linea_Mediana', 'Tronco_Encefalico', 'Cervelletto', 'Ventricoli_SpaziSubAracnoidei', 'Strutture_Extracraniche', 'Ossa_Craniche'], sottosezioneId: ['Corteccia_Cerebrale', 'Sostanza_Bianca', 'Volumi_Cerebrali', 'Strutture_Mediane', 'Posizione', 'Dimensioni', 'Prendita_Contrasto', 'Densita_Composizione', 'Identificazione', 'Misurazione', 'Causa', 'Mesencefalo', 'Ponte', 'Bulbo', 'Emisferi_Cerebellari', 'Verme_Cerebellare', 'Fossa_Posteriore', 'IV_Ventricolo', 'Ventricoli_Laterali', 'III_Ventricolo', 'IV_Ventricolo', 'Sistema_Seni_Venosi', 'Pelle_Cuoio_Capelluto', 'Muscoli_Cranici', 'Osso_Frontale', 'Ossa_Parietali', 'Ossa_Temporali', 'Osso_Occipitale'] },
  { id: 2, nome: 'Trauma Cranico', sezioneId: ['Shift_Linea_Mediana'], sottosezioneId: ['Volumi_Cerebrali'], descRowId: ['Lobi_Frontali', 'Corteccia_Cerebrale', 'Sostanza_Bianca'] },
  { id: 3, nome: 'Trauma Cranico', sezioneId: ['Tronco_Encefalico'], sottosezioneId: ['Volumi_Cerebrali'], descRowId: ['Lobi_Temporali'] },
  { id: 4, nome: 'Trauma Cranico', sezioneId: ['Cervelletto'], sottosezioneId: ['Volumi_Cerebrali'], descRowId: ['Lobi_Parietali'] },
  { id: 5, nome: 'Trauma Cranico', sezioneId: ['Parenchima_Cerebrale'], sottosezioneId: ['Volumi_Cerebrali'], descRowId: ['Lobi_Occipitali'] },
  { id: 6, nome: 'Trauma Cranico', sezioneId: ['Parenchima_Cerebrale'], sottosezioneId: ['Volumi_Rimanenti_Strutture_Cerebrali'], descRowId: ['Volumi_Rimanenti_Strutture_Cerebrali'] },
  { id: 7, nome: 'Trauma Cranico', sezioneId: ['Parenchima_Cerebrale'], sottosezioneId: ['Volumi_Cerebrali'], descRowId: ['Gangli_della_Base'] },
  { id: 8, nome: 'Trauma Cranico', sezioneId: ['Parenchima_Cerebrale'], sottosezioneId: ['Volumi_Cerebrali'], descRowId: ['Talamo'] },
  { id: 9, nome: 'Trauma Cranico', sezioneId: ['Parenchima_Cerebrale'], sottosezioneId: ['Volumi_Cerebrali'], descRowId: ['Cervelletto'] },
  { id: 10, nome: 'Trauma Cranico', sezioneId: ['Parenchima_Cerebrale'], sottosezioneId: ['Volumi_Cerebrali'], descRowId: ['Tronco_Encefalico'] },
  // Altri oggetti indicazione qui...
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

  const handleCheckboxChange = (event, indicazione) => {
    if (event.target.checked) {
      onSectionSelection(indicazione);
    } else {
      onSectionDeselection(indicazione);
    }
  }


  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2>Indicazioni Cliniche</h2>
      <form>
        {risultatiRicerca.map((indicazione, index) => (
          <div className="mb-4" key={index}>
              <input 
                type="checkbox" 
                id={`indicazione${index}`} 
                name={`indicazione${index}`} 
                onChange={(e) => handleCheckboxChange(e, indicazione)}
              />

            <label htmlFor={`indicazione${index}`}> {indicazione.nome}</label><br/>
          </div>
        ))}
      </form>
    </div>
  );
}

export default IndicazioniCliniche;