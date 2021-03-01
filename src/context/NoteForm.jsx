import React, { createContext, useState, useContext } from "react";

const NoteFormContext = createContext();

export default function NoteFormProvider({ children }) {
  const [visibleForm, setVisibleForm] = useState(false);

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  return (
    <NoteFormContext.Provider
      value={{
        visibleForm,
        setVisibleForm,
        title,
        setTitle,
        note,
        setNote,
      }}
    >
      {children}
    </NoteFormContext.Provider>
  );
}

export function useNoteForm() {
  const context = useContext(NoteFormContext);
  const {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    note,
    setNote,
  } = context;
  return { visibleForm, setVisibleForm, title, setTitle, note, setNote };
}
