import React from "react";
import { useHighlight } from "../../context/HighlightContext";
import { useNoteForm } from "../../context/NoteFormContext";

import "./styles.css";

export default function Note({ id, title, description }) {
  const { highlight, setHighlight } = useHighlight();
  const { setVisibleForm } = useNoteForm();

  return (
    <div
      id={id}
      onClick={() => {
        if (highlight === id) {
          setHighlight(false);
          setVisibleForm(false);
        } else {
          setHighlight(id);
          setVisibleForm(true);
        }
      }}
      className={`note${highlight === id ? " highlight" : ""}`}
    >
      <h2 className="title">{title}</h2>
      <hr />
      <p className="note-description">{description}</p>
    </div>
  );
}
