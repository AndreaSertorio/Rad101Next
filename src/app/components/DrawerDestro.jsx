'use client'

// DrawerDestro.jsx
import React, { useContext, useState, useEffect } from 'react'; // Import useEffect
import { Button, Drawer, Card, Col, Row, Image, Checkbox } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { FocusContext } from './FocusFiles/FocusContext';

const { Meta } = Card;

const DrawerDestro = ({ onClose }) => {
    const [open, setopen] = useState(false);
    const { focus, hideDrawer, drawerVisible, closeOnClickOutside, setCloseOnClickOutside } = useContext(FocusContext);
    const [drawerWidth, setDrawerWidth] = useState(window.innerWidth / 3); // Initialize drawerWidth

    // Update drawerWidth when the window is resized
    useEffect(() => {
        const handleResize = () => setDrawerWidth(window.innerWidth / 3);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Clean up event listener
    }, []);

        useEffect(() => {
        // Add the 'drawer-open' class to the body when the drawer is open
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
                width={drawerWidth} // Use drawerWidth state variable
        >
               <Checkbox checked={!closeOnClickOutside} onChange={e => setCloseOnClickOutside(!e.target.checked)}>
                  Mantieni il drawer aperto quando clicco fuori
                </Checkbox>
                {focus ? (
                    <div>
                        <h2>{focus.title}</h2>
                        <Row gutter={16}>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <Card title="Table Description" hoverable>
                                    <p>{focus.tableDesc}</p>
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <Card title="Normal Description" hoverable>
                                    <p>{focus.normalDesc}</p>
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <Card title="Image Description" hoverable>
                                    <p>{focus.imageDesc}</p>
                                    <Image src={focus.imagePath} />
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <Card title="Pathology List" hoverable>
                                    {focus.pathologyList.map((pathology, index) => (
                                        <p key={index}>{pathology}</p>
                                    ))}
                                </Card>
                            </Col>
                        </Row>
                    </div>
                ) : (
                    <>
                        <p>Alcuni contenuti...</p>
                        <p>Alcuni contenuti...</p>
                        <p>Alcuni contenuti...</p>
                    </>
                )}
                <Button type="primary" onClick={handleOnClose}>
                    Chiudi
                </Button>
            </Drawer>
        </>
    );
};

export default DrawerDestro;

