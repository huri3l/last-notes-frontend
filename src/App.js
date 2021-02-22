import React, { useState } from "react";
import Header from "./components/Header";
import NotesArea from "./components/NotesArea";
import Notes from "./components/Notes";
import Actions from "./components/Actions";

import NoteFormProvider from "./context/NoteForm";

export default function App() {
  return (
    <NoteFormProvider>
      <Header>
        <h1 className="logo">
          <span>LAST </span>
          NOTES
        </h1>
        <Actions />
      </Header>
      <NotesArea>
        <Notes />
      </NotesArea>
    </NoteFormProvider>
  );
}
