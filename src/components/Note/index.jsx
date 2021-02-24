import React, { useState, useEffect } from "react";

import "./styles.css";

export default function Note({ id, title, description, highlight, setHighlight }) {
  function highlightNote() {
    setHighlight(id);
  }

  return (
    <div
      id={id}
      onClick={() => setHighlight(id)}
      className={`note${highlight === id ? " highlight" : ""}`}
    >
      <h2 className="title">{title}</h2>
      <hr />
      <p className="note-description">{description}</p>
    </div>
  );
}
