'use client'

// radiowiki/page.tsx


import React, { useState, useContext } from 'react';
import BarraSup from '../components/BarraSup';
import TemplateContainer from '../components/Templates/TemplateContainer';
import DrawerWrapper from '../components/DrawerWrapper';
import { FocusProvider } from '../components/FocusFiles/FocusContext';
import Algoritmo_SolitaryLucentBoneLesionOnCTinAdults from './Algoritmo_SolitaryLucentBoneLesionOnCTinAdults'; // Import del nuovo componente


export default function radioWiki() {
    return (
        <FocusProvider>
            <div>
                <BarraSup />
                <h1 style={{ textAlign: 'center' }}>RadioWIKI</h1>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="flex-grow" style={{ flexGrow: 1, width: '100%' }}>
                        <TemplateContainer />
                        {/* Inserimento del componente Bone_RADS_Calculator */}
                        <Algoritmo_SolitaryLucentBoneLesionOnCTinAdults/>
                    </div>
                </div>
                <DrawerWrapper />
            </div>
        </FocusProvider>
    );
}