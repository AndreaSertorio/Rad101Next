'use client'

// Home.jsx


import React, { useState, useContext } from 'react';
import BarraSup from './components/BarraSup';
import BarraLatSin from './components/BarraLatSin';
import TemplateContainer from './components/Templates/TemplateContainer';
import DrawerWrapper from './components/DrawerWrapper';
import { FocusContext } from './components/FocusFiles/FocusContext'; // Import FocusContext



export default function Home() {
    const { drawerVisible } = useContext(FocusContext); // Aggiungi questa riga



  return (
    <div>
      <BarraSup />
            <div className={`main-content ${drawerVisible ? 'drawer-open' : ''}`}>
        <BarraLatSin>
          <h1 className="px-8 py-2 font-semibold text-xl tracking-tight" >hi</h1>
        </BarraLatSin>
        <div className="flex-grow" style={{flexGrow: 1}}>
          <TemplateContainer />
        </div>
      </div>
        <DrawerWrapper /> // Inserisci il WrapperDrawer nella tua pagina

    </div>
  );
}
