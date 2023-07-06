//tabs.jsx
'use client'

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TabIndicazioniCliniche from './TabIndicazioniCliniche'; // Importa il tuo componente IndicazioniCliniche qui

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('metodiche');

  return (
    <div className="w-64">
      <div className="flex bg-gray-800">
        <button
          className={`w-1/2 p-3 ${activeTab === 'metodiche' ? 'text-white' : 'text-gray-500'}`}
          onClick={() => setActiveTab('metodiche')}
        >
          Metodiche
        </button>
        <button
          className={` w-1/2 p-3 ${activeTab === 'indicazioni' ? 'text-white' : 'text-gray-500'}`}
          onClick={() => setActiveTab('indicazioni')}
        >
          Indicazioni Cliniche
        </button>
      </div>

      <div className="border-r border-gray-600">
        {activeTab === 'metodiche' && <Sidebar />}
        {activeTab === 'indicazioni' && <TabIndicazioniCliniche />}
      </div>
    </div>
  );
};

export default Tabs;
