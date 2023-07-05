// Sidebar.jsx
import React from 'react';

const menuItems = [
  {
    title: 'RX',
    subItems: [],
  },
  {
    title: 'TC',
    subItems: ['CT HEAD', 'CT NECK', 'CT SINUSES', 'CT CHEST', 'CT ABDOMEN', 'CT ABDOMEN-PELVIS', 'CT PANKREAS', 'CT SPINE', 'ANGIO TC'],
  },
  {
    title: 'MRI',
    subItems: ['MR NECK', 'MR CARDIAC', 'ANGIO MR', 'MRI WHOLEBODY', 'MR ABDOMEN', 'MR PROSTATA', 'MR SHOULDER', 'MR ELBOW', 'MR SPINE', 'MR WRIST', 'MR HIP', 'MR KNEE', 'MR ANKLE'],
  },
  {
    title: 'ECO',
    subItems: [],
  },
];

function Sidebar() {
  return (
    <div className="sidebar bg-gray-800 text-white border-r border-gray-600 w-64 p-4">
      {menuItems.map((menuItem) => (
        <div key={menuItem.title} className="mb-4">
          <button className="mb-2">{menuItem.title}</button>
          {menuItem.subItems.map((subItem) => (
            <div key={subItem} className="ml-4">
              <button>{subItem}</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
