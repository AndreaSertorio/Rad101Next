// BarraLatSin.jsx
'use client'
import { useState } from 'react';
import Sidebar from './Sidebar';
import TemplateContainer from './Templates/TemplateContainer';
import BarraRicercaIndicazioniCliniche from './BarraRicercaIndicazioniCliniche';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function BarraLatSin({ children }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [tab, setTab] = useState('metodiche');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full">
      {isSidebarOpen && 
        <div className="w-64 bg-gray-800 text-white p-4 border-r border-gray-600">
          <div className="flex justify-between mb-4 p-2">
            <button className="rounded-lg border-white border-2 p-2   hover:bg-slate-600  cursor-pointer" onClick={() => setTab('metodiche')}>Metodiche</button>
            <button className="rounded-lg border-white border-2 p-1  hover:bg-slate-600 cursor-pointer"  onClick={() => setTab('indicazioni')}>Indicazioni Cliniche</button>
          </div>
          {tab === 'metodiche' ? (
            <Sidebar onMenuItemClick={handleMenuItemClick} />
          ) : (
            <BarraRicercaIndicazioniCliniche />
          )}
        </div>
      }
      <button className="mt-4 mx-2" onClick={toggleSidebar}> {/* Aggiungi le classi di tailwind css per posizionare il tuo bottone */}
        {isSidebarOpen ? <FaTimes /> : <FaBars />} {/* Utilizza le icone al posto del testo */}
      </button>
      <div className="flex-grow">
        <TemplateContainer selectedMenuItem={selectedMenuItem} />
      </div>
    </div>
  );
}
