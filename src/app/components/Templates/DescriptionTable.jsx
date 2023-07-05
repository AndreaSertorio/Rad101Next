// DescriptionTable.jsx
'use client'
import React from 'react';
import DescriptionRow from './DescriptionRow';

const DescriptionTable = ({ rows }) => (
    <div className="mt-4 bg-gray-100">
        {rows.map(row => <DescriptionRow key={row.title} title={row.title} description={row.description} />)}
    </div>
);

export default DescriptionTable;
