import React from "react";
import { FaCheck, FaBan } from "react-icons/fa";

import { useNoteForm } from "../../context/NoteForm";

import "./styles.css";

export default function NoteForm() {
  const { visibleForm, setVisibleForm } = useNoteForm();

  function handleSubmit(e) {
    e.preventDefault(e);
    console.log("entrou");
  }

  function handleCancel(e) {
    e.preventDefault(e);
    setVisibleForm(!visibleForm);
  }

  return (
    <form className="note-menu">
      <div>
        <label htmlFor="title">Título</label>
        <input id="title" type="text" placeholder="Informe um título" />
      </div>
      <div>
        <label htmlFor="note">Nota</label>
        <textarea
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
