'use client'

// DrawerDestro.jsx
import React, { useContext, useState, useEffect } from 'react';
import { Button, Drawer, Card, Col, Row, Image, Checkbox, Tabs } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { FocusContext } from './FocusFiles/FocusContext';
import ChatContainer from './chat/ChatContainer'; 
import FocusContainer from './FocusFiles/FocusContainer'; 

const { Meta } = Card;
const { TabPane } = Tabs;

const DrawerDestro = ({ onClose }) => {
    const [open, setopen] = useState(false);
    const { focus, hideDrawer, drawerVisible, closeOnClickOutside, setCloseOnClickOutside } = useContext(FocusContext);
    const [drawerWidth, setDrawerWidth] = useState(300);  // valore iniziale di default
    const [activeTab, setActiveTab] = useState('1');

    useEffect(() => {
        // verifica se l'oggetto window è definito
        if (typeof window !== "undefined") {
            setDrawerWidth(window.innerWidth / 3);  // Imposta lo stato qui
            const handleResize = () => setDrawerWidth(window.innerWidth / 3);
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);  // dipendenza vuota, quindi questo viene eseguito solo al montaggio

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    useEffect(() => {
        if (drawerVisible && !closeOnClickOutside) {
            document.body.classList.add('drawer-open');
        } else {
            document.body.classList.remove('drawer-open');
        }
    }, [drawerVisible, closeOnClickOutside]);

    const handleOnClose = () => {
        if (closeOnClickOutside) {
            hideDrawer();
        }
    };

    return (
        <>
            <Drawer
                title={focus ? focus.title : "Informazioni sulla sezione"}
                placement="right"
                closable={closeOnClickOutside}
                onClose={handleOnClose}
                open={drawerVisible}
                width={drawerWidth}
            >
                <Checkbox checked={!closeOnClickOutside} onChange={e => setCloseOnClickOutside(!e.target.checked)}>
                    Mantieni il drawer aperto quando clicco fuori
                </Checkbox>
                <Tabs activeKey={activeTab} onChange={handleTabChange}>
                    <TabPane tab="Focus Files" key="1">
                        <FocusContainer />
                    </TabPane>
                    <TabPane tab="Chat" key="2">
                        <ChatContainer />
                    </TabPane>
                </Tabs>
                <Button type="primary" onClick={handleOnClose}>
                    Chiudi
                </Button>
            </Drawer>
        </>
    );
};

export default DrawerDestro;
