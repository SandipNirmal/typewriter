import React from "react";

import ListItem from "./ListItem";

const notes = [
  {
    id: 1,
    title: "ABC",
    content: "Some Random Content",
    updatedAt: "08/11/2019"
  },
  {
    id: 2,
    title: "Test",
    content: "Some Random Content",
    updatedAt: "07/11/2019"
  }
];

export function Sidebar() {
  return (
    <div className="sidebar">
      {notes.map(({ id, ...note }) => (
        <ListItem key={id} {...note} />
      ))}
    </div>
  );
}

export default React.memo(Sidebar);
