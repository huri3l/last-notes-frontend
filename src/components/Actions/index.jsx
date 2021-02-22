import React from "react";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";

import { useNoteForm } from "../../context/NoteForm";

import "./styles.css";

export default function Actions() {
  const { visibleForm, setVisibleForm } = useNoteForm();

  function handleCreate() {
    setVisibleForm(!visibleForm);
  }

  return (
    <div className="actions">
      <button className="create" onClick={handleCreate}>
        <FaPlus className="icon" />
      </button>
      <button className="edit">
        <FaPencilAlt className="icon" />
      </button>
      <button className="delete">
        <FaTrash className="icon" />
      </button>
    </div>
  );
}
