import React from "react";
import "./List.css";
import { Scrollbars } from 'react-custom-scrollbars';

export const List = ({ children }) => {
  return (
    <Scrollbars className="scrollBar" style={{ width: "100%", height: 300 }}>
    <div>
      <ul className="list-group">
        {children}
      </ul>
    </div>
    </Scrollbars>
  );
};
