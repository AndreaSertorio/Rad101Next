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
    <div className="flex w-full">
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <div className="flex-grow">
        <TemplateContainer selectedMenuItem={selectedMenuItem} />
      </div>
    </div>
  );
}
