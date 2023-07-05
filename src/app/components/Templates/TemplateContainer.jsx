// TemplateContainer.jsx
'use client'
import React from 'react';
import Template from './Template';

const templates = {
  'ct-head': {
    id: 'ct-head',
    sections: [
      {
        id: 'section1',
        title: 'Neck soft tissues',
        rows: [
          {
            title: 'THYROID',
            description: 'The thyroid gland is homogeneous in texture and has normal dimensions (right lobe measures 5.0 x 1.8 x 1.7 cm and left lobe measures 4.5 x 1.6 x 1.5 cm). No nodules or masses are identified.',
          },
          {
            title: 'LYMPH NODES',
            description: 'Multiple small reactive lymph nodes are noted in the bilateral cervical chains.',
          },
          {
            title: 'MUSCLES',
            description: 'The sternocleidomastoid and strap muscles appear normal in appearance and signal intensity.',
          },
          {
            title: 'FAT',
            description: 'The subcutaneous and prevertebral fat are within normal limits.',
          },
          {
            title: 'VESSELS',
            description: 'The carotid and vertebral arteries are patent without evidence of stenosis or aneurysm.',
          },
        ],
      },
      // ...altre sezioni
    ],
  },
  // Aggiungi qui altri templates con la stessa struttura
};

const TemplateContainer = ({ selectedMenuItem }) => {
  // Seleziona il template corretto basandosi sull'id passato
  const selectedTemplate = templates[selectedMenuItem];

  // Se non c'è nessun template selezionato, non mostrare nulla
  if (!selectedTemplate) {
    return null;
  }

  // Altrimenti, mostra il template selezionato
  return <Template template={selectedTemplate} />;
};

export default TemplateContainer;
