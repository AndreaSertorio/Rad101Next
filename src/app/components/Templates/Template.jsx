// Template.jsx
'use client'
import React from 'react';
import Section from './Section';

const Template = ({ template }) => (
    <div data-template-id={template.id} className="bg-gray-600 p-4 rounded-lg shadow-md">
        <table className="w-full">
            <thead>
                <tr>
                    <th className="p-4">Organo\Sistema</th>
                    <th className="p-4">Descrizione</th>
                </tr>
            </thead>
            <tbody>
                {template.sections.map(section => <Section key={section.title} {...section} />)}
            </tbody>
        </table>
    </div>
);

export default Template;
