import React, { useState, useEffect } from "react";
import { useHighlight } from "../../context/Highlight";
import { useNoteForm } from "../../context/NoteForm";

import "./styles.css";

export default function Note({ id, title, description }) {
  const { highlight, setHighlight } = useHighlight();

  return (
    <div
      id={id}
      onClick={() => setHighlight(id)}
      className={`note${highlight === id ? " highlight" : ""}`}
    >
      <h2 className="title">{title}</h2>
      <hr />
      <p className="note-description">{description}</p>
    </div>
  );
}
