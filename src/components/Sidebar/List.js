import React from 'react';

import ListItem from './ListItem';

import './List.css';

export function NoteList({ notes }) {
  return (
    <div className="list">
      {notes.map(({ id, ...note }) => (
        <ListItem key={id} {...note} />
      ))}
    </div>
  );
}

export default NoteList;
