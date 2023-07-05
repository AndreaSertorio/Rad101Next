// DescriptionTable.jsx
import React from 'react';
import DescriptionRow from './DescriptionRow';

const DescriptionTable = ({ rows }) => (
    <div className="mt-4 bg-gray-100">
        {rows.map(row => <DescriptionRow key={row.title} {...row} />)}
    </div>
);

export default DescriptionTable;
