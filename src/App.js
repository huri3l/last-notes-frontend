import React from "react";
import Header from "./components/Header";
import NotesArea from "./components/NotesArea";
import Notes from "./components/Notes";
import Actions from "./components/Actions";
import Logo from "./components/Logo";

import NoteFormProvider from "./context/NoteForm";
import NoteListProvider from "./context/NoteList";
import HighlightProvider from "./context/Highlight";

export default function App() {
  return (
    <NoteFormProvider>
      <NoteListProvider>
        <HighlightProvider>
          <Header>
            <Logo />
            <Actions />
          </Header>
          <NotesArea>
            <Notes />
          </NotesArea>
        </HighlightProvider>
      </NoteListProvider>
    </NoteFormProvider>
  );
}
