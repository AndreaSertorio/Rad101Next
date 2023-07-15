'use client'

// radiowiki/page.tsx


import React, { useState, useContext } from 'react';
import BarraSup from '../components/BarraSup';
import TemplateContainer from '../components/Templates/TemplateContainer';
import DrawerWrapper from '../components/DrawerWrapper';
import { FocusProvider } from '../components/FocusFiles/FocusContext';

export default function radioWiki() {
    return (
        <FocusProvider>
            <div>
               
                <BarraSup />
                 <h1>RadioWIKI</h1>
                <div>
                    <div className="flex-grow" style={{flexGrow: 1}}>
                        <TemplateContainer />
                    </div>
                </div>
                <DrawerWrapper /> 
            </div>
        </FocusProvider>
    );
}
