// TemplateContainer.jsx
'use client'
import React from 'react';
import Template from './Template';

// importa templates
import ctNeck from './CTtemplates/ct-neck';
import ctSinuses from './CTtemplates/ct-sinuses';
import cthead from './CTtemplates/ct-head';
import ctChest from './CTtemplates/ct-chest';
import ctAbdomen from './CTtemplates/ct-abdomen';
import ctPankreas from './CTtemplates/ct-pankreas';




const templates = {
    'ct-head': cthead,
    'ct-neck': ctNeck,
    'ct-sinuses': ctSinuses,
    'ct-chest': ctChest,
    'ct-abdomen': ctAbdomen,
    'ct-pankreas': ctPankreas,


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
