import React, { useState } from "react";
import Header from "./components/Header";
import NotesArea from "./components/NotesArea";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import Actions from "./components/Actions";

export default function App() {
  const [visibleForm, setVisibleForm] = useState(false);

  return (
    <>
      <Header>
        <h1 className="logo">
          <span>LAST </span>
          NOTES
        </h1>
        <Actions visibleForm={visibleForm} setVisibleForm={setVisibleForm} />
      </Header>
      <NotesArea>
        <Notes />
        {visibleForm && <NoteForm />}
      </NotesArea>
    </>
  );
}
