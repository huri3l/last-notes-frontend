import React, { useState } from "react";
import Note from "../Note";

import { useNoteList } from "../../context/NoteList";

import "./styles.css";

export default function Notes() {
  // * Configurar o componente Note para aceitar os parâmetros aí
  const { noteList, setNoteList } = useNoteList();

  return (
    <section className="notes">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      {/* {noteList.map((Note, id) => <Note key={id} />)} */}
    </section>
  );
}
