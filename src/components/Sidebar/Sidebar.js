import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import List from './List';
import Typography from '../Typography/Typography';

import './Sidebar.css';

export function Sidebar({
  notes,
  selectedNote,
  setSelectedNote,
  handleDeleteNote,
  handleAddNote
}) {
  return (
    <div className="sidebar">
      <div className="title">
        <div className="title-logo">
          <Typography variant="title3">Type Writer</Typography>
        </div>
        <span className="icon" onClick={handleAddNote} title="Add New Note">
          <FaPlusCircle />
        </span>
      </div>

      <List
        notes={notes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        handleDeleteNote={handleDeleteNote}
      />

      <div className="sidebar-footer">
        <div className="sidebar-footer content">
          <Typography variant="footnote">
            Total Notes: {notes.length}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
