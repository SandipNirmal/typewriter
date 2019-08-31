import React from 'react';

import ListItem from './ListItem';

import './List.css';

export function NoteList({ notes, selectedNote }) {
  return (
    <div className="list">
      {notes.map(({ id, ...note }, index) => (
        <ListItem key={id} {...note} isSelected={index === selectedNote} />
      ))}
    </div>
  );
}

export default NoteList;
