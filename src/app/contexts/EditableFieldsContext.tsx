//contexts/EditableFieldsContext.tsx

import React from 'react';

type EditableFieldsType = {
  editableFields: { [key: string]: any };
  setEditableFields: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
};

const EditableFieldsContext = React.createContext<EditableFieldsType | undefined>(undefined);

export default EditableFieldsContext;
