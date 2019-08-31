import React from 'react';

import List from './List';
import Typography from '../Typography/Typography';

import './Sidebar.css';

export function Sidebar({ notes, selectedNote, setSelectedNote }) {
  return (
    <div className="sidebar">
      <div className="title">
        <Typography variant="title3">Type Writer</Typography>
        <button>Add New</button>
      </div>

      <List
        notes={notes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
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
