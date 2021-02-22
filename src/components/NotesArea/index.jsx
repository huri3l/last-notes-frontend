import React from "react";

import { useNoteForm } from "../../context/NoteForm";
import NoteForm from "../NoteForm";

import "./styles.css";

export default function NotesArea(props) {
  const { visibleForm, setVisibleForm } = useNoteForm();

  return (
    <article className="notes-area">
      {props.children}
      {visibleForm && <NoteForm />}
    </article>
  );
}
