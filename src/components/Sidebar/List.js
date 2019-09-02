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
      {notes.map(({ id, ...note }) => (
        <ListItem
          key={id}
          {...note}
          isSelected={id === selectedNote}
          onSelect={() => {
            setSelectedNote(id);
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
