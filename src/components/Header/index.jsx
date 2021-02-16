import React from "react";

import "./styles.css";

export default function Header(props) {
  return (
    <header>
      {props.children}
    </header>
  );
}
