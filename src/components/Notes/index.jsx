import React, { useState, useEffect } from "react";
import Note from "../Note";

import { useNoteList } from "../../context/NoteList";

import "./styles.css";

export default function Notes() {
  const { noteList, setNoteList } = useNoteList();

  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    getLocalNotes();
  }, []);

  function getLocalNotes() {
    let localNotes = localStorage.getItem("notes");
    console.log(localNotes);
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
