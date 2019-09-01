import React from 'react';

import ListItem from './ListItem';

import './List.css';

export function NoteList({ notes, selectedNote, setSelectedNote }) {
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
        />
      ))}
    </div>
  );
}

export default NoteList;
