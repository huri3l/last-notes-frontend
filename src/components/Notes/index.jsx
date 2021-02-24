import React, { useState } from "react";
import Note from "../Note";

import { useNoteList } from "../../context/NoteList";

import "./styles.css";

export default function Notes() {
  const { noteList, setNoteList } = useNoteList();

  const [highlight, setHighlight] = useState(false);

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
