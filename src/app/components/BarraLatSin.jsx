// BarraLatSin.jsx
'use client'
import { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Tabs from './Tabs'; // Assicurati che il percorso sia corretto
import { FaBars, FaTimes } from 'react-icons/fa'; // Importa le icone che desideri utilizzare

export default function BarraLatSin({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {isSidebarOpen && 
        <div>
          <Tabs /> 
        </div>
      }
      <button className="mt-4 mx-2" onClick={toggleSidebar}> {/* Aggiungi le classi di tailwind css per posizionare il tuo bottone */}
        {isSidebarOpen ? <FaTimes /> : <FaBars />} {/* Utilizza le icone al posto del testo */}
      </button>
      <Content>{children}</Content>
    </div>
  );
}
