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
    if (visibleForm && highlight) {
      setTitle("");
      setDescription("");
      setHighlight(false);
    } else setVisibleForm(!visibleForm);
  }

  function handleEdit() {
    const highlightNote = noteList.find((note) => note.id === highlight);

    setTitle(highlightNote.title);
    setDescription(highlightNote.description);
    setVisibleForm(!visibleForm);
  }

  function handleDelete() {
    setTitle("");
    setDescription("");
    setHighlight(false);

    const highlightNote = noteList.find((note) => note.id === highlight);
    const highlightNoteIdx = noteList.indexOf(highlightNote);
    noteList.splice(highlightNoteIdx, 1);

    setNoteList([...noteList]);
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
        <FaTrash
          className={`icon ${!highlight && "disabled"}`}
          onClick={handleDelete}
        />
      </button>
    </div>
  );
}
