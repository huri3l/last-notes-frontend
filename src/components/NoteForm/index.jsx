import React, { useEffect, useState } from "react";
import { FaCheck, FaBan } from "react-icons/fa";

import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";

import "./styles.css";

export default function NoteForm() {
  const {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    description,
    setDescription,
  } = useNoteForm();
  const { noteList, setNoteList } = useNoteList();

  useEffect(() => {
    saveLocalNotes();
  }, [noteList]);

  function inputTitleHandler(e) {
    setTitle(e.target.value);
  }

  function inputNoteHandler(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    setNoteList([
      ...noteList,
      {
        id: String(Math.floor(Math.random() * 1000)),
        title,
        description,
      },
    ]);
  }

  function saveLocalNotes() {
    localStorage.setItem("notes", JSON.stringify(noteList));
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
          value={description}
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
