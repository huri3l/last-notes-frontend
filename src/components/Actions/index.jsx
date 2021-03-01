import React from "react";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useHighlight } from "../../context/HighlightContext";

import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";

import "./styles.css";

export default function Actions() {
  const {
    visibleForm,
    setVisibleForm,
    setTitle,
    setDescription,
  } = useNoteForm();
  const { highlight, setHighlight } = useHighlight();
  const { noteList, setNoteList } = useNoteList();

  function handleCreate() {
    setVisibleForm(!visibleForm);
  }

  function handleEdit() {
    const highlightNote = noteList.find((note) => note.id === highlight);

    setTitle(highlightNote.title);
    setDescription(highlightNote.description);
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
