import React from "react";
import "./List.css";

export const ListItem = props => (
  <li className="talk-bubble tri-right left-top">
    {props.children}
  </li>
);
