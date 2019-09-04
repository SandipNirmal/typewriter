import React from 'react';

import ListItem from './ListItem';

import './List.css';

export function NoteList({
  notes,
  selectedNote,
  setSelectedNote,
  handleDeleteNote
}) {
  return (
    <div className="list">
      {notes.map(({ id, ...note }, index) => (
        <ListItem
          key={id}
          {...note}
          isSelected={index === selectedNote}
          onSelect={() => {
            setSelectedNote(index);
          }}
          onDelete={() => {
            handleDeleteNote(id);
          }}
        />
      ))}
    </div>
  );
}

export default NoteList;
