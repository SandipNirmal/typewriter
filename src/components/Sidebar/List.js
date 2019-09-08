import React from 'react';

import { ListItem, EmptyNotes } from './';

import './List.css';

export function NoteList({
  notes,
  selectedNote,
  setSelectedNote,
  handleDeleteNote
}) {
  return (
    <div className="list">
      {notes.length ? (
        notes.map(({ id, ...note }, index) => (
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
        ))
      ) : (
        <EmptyNotes />
      )}
    </div>
  );
}

export default NoteList;
