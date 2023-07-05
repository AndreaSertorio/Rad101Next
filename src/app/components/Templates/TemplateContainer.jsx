// TemplateContainer.jsx
'use client'
import React from 'react';
import Template from './Template';

const template = {
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
};

const TemplateContainer = () => {
  return <Template template={template} />;
};

export default TemplateContainer;
