import React, { createContext, useState, useContext } from "react";

const NoteFormContext = createContext();

export default function NoteFormProvider({ children }) {
  const [visibleForm, setVisibleForm] = useState(false);

  return (
    <NoteFormContext.Provider
      value={{
        visibleForm,
        setVisibleForm,
      }}
    >
      {children}
    </NoteFormContext.Provider>
  );
}

export function useNoteForm() {
  const context = useContext(NoteFormContext);
  const { visibleForm, setVisibleForm } = context;
  return { visibleForm, setVisibleForm };
}
