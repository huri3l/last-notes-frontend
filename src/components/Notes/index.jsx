import React, { useState, useEffect } from "react";
import Note from "../Note";

import { useNoteList } from "../../context/NoteListContext";
import { useNoteForm } from "../../context/NoteFormContext";
import { useHighlight } from "../../context/HighlightContext";

import "./styles.css";

export default function Notes() {
  const { noteList, setNoteList } = useNoteList();
  const { highlight, setHighlight } = useHighlight();
  const { setTitle, setDescription } = useNoteForm();

  useEffect(() => {
    getLocalNotes();
  }, []);

  useEffect(() => {
    if (highlight) {
      const higlightNote = noteList.find((note) => note.id === highlight);

      setTitle(higlightNote.title);
      setDescription(higlightNote.description);
    }
  }, [highlight]);

  function getLocalNotes() {
    let localNotes = localStorage.getItem("notes");
    if (localNotes === null) localStorage.setItem("notes", JSON.stringify([]));
    else {
      localNotes = JSON.parse(localNotes);
      setNoteList(localNotes);
    }
  }

  return (
    <section className="notes">
      {noteList.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          highlight={highlight}
          setHighlight={setHighlight}
        />
      ))}
    </section>
  );
}
