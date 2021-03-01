import React from "react";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useHighlight } from "../../context/Highlight";

import { useNoteForm } from "../../context/NoteForm";
import { useNoteList } from "../../context/NoteList";

import "./styles.css";

export default function Actions() {
  const {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    note,
    setNote,
  } = useNoteForm();
  const { highlight, setHighlight } = useHighlight();
  const { noteList, setNoteList } = useNoteList();

  function handleCreate() {
    setVisibleForm(!visibleForm);
  }

  function handleEdit() {
    const highlightNote = noteList.find((note) => note.id === highlight);

    setTitle(highlightNote.title);
    setNote(highlightNote.note);
    setVisibleForm(!visibleForm);
  }

  return (
    <div className="actions">
      <button className="create" onClick={handleCreate}>
        <FaPlus className="icon" />
      </button>
      <button className="edit">
        <FaPencilAlt
          className={`icon ${!highlight && "disabled"}`}
          onClick={handleEdit}
        />
      </button>
      <button className="delete">
        <FaTrash className={`icon ${!highlight && "disabled"}`} />
      </button>
    </div>
  );
}
