'use client'

// Home.jsx

import React, { useContext, useState } from 'react';
import BarraSup from './components/BarraSup';
import BarraLatSin from './components/BarraLatSin';
import TemplateContainer from './components/Templates/TemplateContainer';
import DrawerWrapper from './components/DrawerWrapper';
import { FocusContext, FocusProvider } from './components/FocusFiles/FocusContext';
import EditableFieldsContext from './contexts/EditableFieldsContext'; // Importa il nuovo contesto
import RefertoGpt from './components/chat/refertogpt';
import RefertoGptNetfily from './components/chat/RefertoGptNetlify';
import RefertoGptHeroku from './components/chat/refertoGptHeroku';

const MainContent = () => {
    const { drawerVisible } = useContext(FocusContext);
    const { editableFields } = useContext(EditableFieldsContext);  // Aggiunto qui

    if (!editableFields) {
        console.error("EditableFieldsContext is not available");
        return null;
    }

    const handleButtonClick = () => {
        console.log(editableFields);
    };

    
    
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <BarraSup />
      <div className={`main-content ${drawerVisible ? 'drawer-open' : ''}`}>
        <BarraLatSin>
          <h1 className="px-8 py-2 font-semibold text-xl tracking-tight" >hi</h1>
        </BarraLatSin>
        <div className="flex-grow flex flex-col space-y-4" style={{flexGrow: 1}}>
            <TemplateContainer />
          <RefertoGpt /> 
           <RefertoGptNetfily /> 
           <RefertoGptHeroku /> 

        </div>

      </div>
          <DrawerWrapper />
         
      {/* <button onClick={handleButtonClick}>Stampa campi modificabili</button> Il nuovo pulsante */}
    </div>
  );
};

export default function Home() {
     const [editableFields, setEditableFields] = useState({});
    return (
              <EditableFieldsContext.Provider value={{ editableFields, setEditableFields }}>

        <FocusProvider>
            <MainContent />
        </FocusProvider>
              </EditableFieldsContext.Provider>

    );
}