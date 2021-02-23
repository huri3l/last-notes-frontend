import React from "react";

import { useNoteForm } from "../../context/NoteForm";
import NoteForm from "../NoteForm";

import "./styles.css";

export default function NotesArea({children}) {
  const { visibleForm, setVisibleForm } = useNoteForm();
  return (
    <article className="notes-area">
      {children}
      {visibleForm && <NoteForm />}
    </article>
  );
}
