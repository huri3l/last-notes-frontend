import React, { useState } from "react";
import { FaPlus, FaPencilAlt, FaTrash, FaBan, FaCheck } from "react-icons/fa";

import "./styles.css";

export default function Actions({visibleForm, setVisibleForm}) {
  
  return (
    <div className="actions">
      <button
        className="create"
        onClick={() => {
          setVisibleForm(!visibleForm);
        }}
      >
        <FaPlus className="icon" />
      </button>
      <button className="edit">
        <FaPencilAlt className="icon" />
      </button>
      <button className="delete">
        <FaTrash className="icon" />
      </button>
      <button className="cancel">
        <FaBan className="icon" />
      </button>
      <button className="confirm">
        <FaCheck className="icon" />
      </button>
    </div>
  );
}
