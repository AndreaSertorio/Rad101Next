// FocusContainer.jsx
import React, { useContext } from 'react';
import Card from 'antd/lib/card';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Image from 'antd/lib/image';
import { FocusContext } from './FocusContext';

const FocusContainer = () => {
    const { focus } = useContext(FocusContext); // Access focus from context

    return focus ? (
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
                        <Image src={focus.imagePath} alt="descrizione dell'immagine" />
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
    );
};

export default FocusContainer;
