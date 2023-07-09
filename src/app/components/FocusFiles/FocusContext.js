// FocusContext.js
'use client'

import { createContext, useState } from 'react';

export const FocusContext = createContext();

export const FocusProvider = ({ children }) => {
  const [focus, setFocus] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
    const [closeOnClickOutside, setCloseOnClickOutside] = useState(true);


    const showDrawer = () => setDrawerVisible(true);
  const hideDrawer = () => setDrawerVisible(false);


    
  return (
    <FocusContext.Provider value={{ focus, setFocus, showDrawer, hideDrawer, drawerVisible, closeOnClickOutside, setCloseOnClickOutside }}>
      {children}
    </FocusContext.Provider>
  );

};
