// Home.jsx
import React from 'react';
import BarraSup from './components/BarraSup';
import BarraLatSin from './components/BarraLatSin';
import TemplateContainer from './components/Templates/TemplateContainer';

export default function Home() {
  return (
    <div>
      <BarraSup />
      <div style={{display: 'flex'}}>
        <BarraLatSin>
          <h1 className="px-8 py-2 font-semibold text-xl tracking-tight" >hi</h1>
        </BarraLatSin>
        <div className="flex-grow" style={{flexGrow: 1}}>
          <TemplateContainer />
        </div>
      </div>
    </div>
  );
}
