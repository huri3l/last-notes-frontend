import React, { createContext, useState, useContext } from "react";

const NoteFormContext = createContext();

export default function NoteFormProvider({ children }) {
  const [visibleForm, setVisibleForm] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <NoteFormContext.Provider
      value={{
        visibleForm,
        setVisibleForm,
        title,
        setTitle,
        description,
        setDescription,
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
    description,
    setDescription,
  } = context;
  return {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    description,
    setDescription,
  };
}
