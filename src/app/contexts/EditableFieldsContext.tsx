import React from 'react';

type EditableFieldsType = {
  editableFields: { [key: string]: any };
  setEditableFields: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
};

const defaultValue: EditableFieldsType = {
  editableFields: {},  // Fornisci un oggetto vuoto come valore di default
  setEditableFields: () => {},  // Fornisci una funzione mock che non fa nulla
};

const EditableFieldsContext = React.createContext<EditableFieldsType>(defaultValue);

export default EditableFieldsContext;
