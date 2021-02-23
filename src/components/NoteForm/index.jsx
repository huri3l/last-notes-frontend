import React, { useState } from "react";
import { FaCheck, FaBan } from "react-icons/fa";

import { useNoteForm } from "../../context/NoteForm";
import { useNoteList } from "../../context/NoteList";

import "./styles.css";

export default function NoteForm() {
  const { visibleForm, setVisibleForm } = useNoteForm();
  const { noteList, setNoteList } = useNoteList();

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function inputTitleHandler(e) {
    setTitle(e.target.value);
  }

  function inputNoteHandler(e) {
    setNote(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    setNoteList([
      ...noteList,
      {
        id: Math.random() * 100,
        title,
        note,
      },
    ]);
  }

  function handleCancel(e) {
    e.preventDefault(e);
    setVisibleForm(!visibleForm);
  }

  return (
    <form className="note-menu">
      <div>
        <label htmlFor="title">Título</label>
        <input
          value={title}
          onChange={inputTitleHandler}
          id="title"
          type="text"
          placeholder="Informe um título"
        />
      </div>
      <div>
        <label htmlFor="note">Nota</label>
        <textarea
          value={note}
          onChange={inputNoteHandler}
          id="note"
          type="text"
          rows="10"
          placeholder="Escreva sua nota"
        />
      </div>
      <div className="buttons">
        <button className="cancel" onClick={handleCancel}>
          <FaBan className="icon" />
        </button>
        <button type="submit" onClick={handleSubmit} className="confirm">
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  );
}
