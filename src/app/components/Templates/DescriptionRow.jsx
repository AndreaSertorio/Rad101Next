
// DescriptionRow.jsx
'use client'
import React, { useEffect, useState, useContext } from 'react';
import focusFiles from '../FocusFiles'; // Importa tutti i file di focus
import { FocusContext } from '../FocusFiles/FocusContext';
import EditableFieldsContext from '../../contexts/EditableFieldsContext'; // Importa il nuovo contesto


const DescriptionRow = ({ id, title, description, isOpen, toggleDescRowOpen, getDescRowColor, descRowDaAprire }) => {
    const [value, setValue] = React.useState(description || '');
    const { setFocus, showDrawer } = useContext(FocusContext);
        const { editableFields, setEditableFields } = useContext(EditableFieldsContext); // Usa il nuovo contesto


            // Quando il titolo viene cliccato, aggiorna il focus
    const handleClick = () => {
               showDrawer();
            setFocus(focusFiles[id]);
        };
        useEffect(() => {
        // Quando il componente viene montato, recupera lo stato dal Local Storage
        const savedUserInput = localStorage.getItem(id);
        if (savedUserInput) {
            setValue(savedUserInput);
        }
        }, [id]);
    
    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        // Quando l'input dell'utente cambia, salva nel Local Storage
        localStorage.setItem(id, newValue);
                setEditableFields({ ...editableFields, [id]: newValue }); // Aggiorna il contesto
    console.log(newValue);  // Aggiungi questa riga

    };


    const bgColor = getDescRowColor(id);

    return (
        <div className={`flex flex-col p-2 text-white rounded-lg shadow-md mr-12 ml-10 ${bgColor}`}>
            <div className="flex justify-between pl-6">
                <span onClick={handleClick}  className="font-bold mr-2 cursor-pointer p-1 rounded-lg text-right w-28">{title}:</span>
                <textarea 
                    className="bg-sky-100 text-black flex-grow pl-3 pt-1" 
                    value={value} 
                    onChange={handleChange} 
                    rows="auto" 
                    style={{resize: 'none'}}
                />
            </div>
        </div>
    );
};

export default DescriptionRow;