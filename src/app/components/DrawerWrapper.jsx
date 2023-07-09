// DrawerWrapper.jsx
'use client'

import { useState, useContext } from 'react';
import { Button } from 'antd';
import DrawerDestro from './DrawerDestro';
import { FocusContext } from './FocusFiles/FocusContext';


const DrawerWrapper = () => {
  const [open, setopen] = useState(false);
  const { showDrawer, hideDrawer } = useContext(FocusContext);

  // const onClose = () => {
  //   setopen(false);
  // };

  return (
    <div style={{ position: 'fixed', right: 0, top: '50%' }}>
      <Button type="primary" onClick={showDrawer}>
        Apri Menu
      </Button>
      <DrawerDestro onClose={hideDrawer} />
    </div>
  );
};

export default DrawerWrapper;
