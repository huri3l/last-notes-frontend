import React from "react";

import "./styles.css";

export default function NotesArea(props) {
  return (
    <article className="notes-area">
      {props.children}
    </article>
  );
}
