import React, { useState, useEffect } from "react";
import Note from "../Note";

import { useNoteList } from "../../context/NoteList";
import { useHighlight } from "../../context/Highlight";

import "./styles.css";
import { useNoteForm } from "../../context/NoteForm";

export default function Notes() {
  const { noteList, setNoteList } = useNoteList();
  const { highlight, setHighlight } = useHighlight();
  const { setTitle, setNote } = useNoteForm();

  useEffect(() => {
    getLocalNotes();
  }, []);

  useEffect(() => {
    if (highlight) {
      const higlightNote = noteList.find((note) => note.id === highlight);

      setTitle(higlightNote.title);
      setNote(higlightNote.note);
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
          description={note.note}
          highlight={highlight}
          setHighlight={setHighlight}
        />
      ))}
    </section>
  );
}
