import React from 'react';

import List from './List';
import Typography from '../Typography/Typography';

import './Sidebar.css';

// const notes = [
//   {
//     id: 1,
//     title: 'ABC',
//     content: 'Some Random Content',
//     updatedAt: '08/11/2019'
//   },
//   {
//     id: 2,
//     title: 'Test',
//     content: 'Some Random Content',
//     updatedAt: '07/11/2019'
//   }
// ];

export function Sidebar({ notes }) {
  return (
    <div className="sidebar">
      <div className="title">
        <Typography variant="title3">Type Writer</Typography>
        <button>Add New</button>
      </div>

      <List notes={notes} />

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
