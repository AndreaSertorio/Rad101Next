// BarraLatSin.jsx
'use client'
import { useState } from 'react';
import Sidebar from './Sidebar';
import TemplateContainer from './Templates/TemplateContainer';

export default function BarraLatSin({ children }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="flex">
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <TemplateContainer selectedMenuItem={selectedMenuItem} />
    </div>
  );
}
