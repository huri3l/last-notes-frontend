import React from 'react';

import "./styles.css";

export default function NoteForm() {
  return(
    <form className="note-menu">
      <div>
        <label htmlFor="title">Título</label>
        <input id="title" type="text" placeholder="Informe um título" />
      </div>
      <div>
        <label htmlFor="note">Nota</label>
        <textarea id="note" type="text" rows="10" placeholder="Escreva sua nota" />
      </div>
    </form>
  );
}