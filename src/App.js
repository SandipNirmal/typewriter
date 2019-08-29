import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';

import db from './services/StorageService';
import { Sidebar } from './components';

import './App.css';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    db.table('notes')
      .toArray()
      .then(notes => {
        setNotes(notes);
      });
  }, []);

  const handleAddNote = ({ title, content }) => {
    const note = {
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
      isArchieved: false
    };

    db.table('notes')
      .add(note)
      .then(id => {
        const newNotes = [...notes, Object.assign({}, note, { id })];
        setNotes(newNotes);
      });
  };

  const handleUpdateNote = (id, title, content) => {
    db.table('notes')
      .update(id, { title, content, updatedAt: new Date() })
      .then(() => {
        const noteToUpdate = notes.find(note => note.id === id);
        const newNotes = [
          ...notes.filter(note => note.id !== id),
          Object.assign({}, noteToUpdate, {
            title,
            content,
            updatedAt: new Date()
          })
        ];
        setNotes(newNotes);
      });
  };

  const handleDeleteNote = id => {
    db.table('notes')
      .delete(id)
      .then(() => {
        const remainingNotes = notes.filter(note => note.id !== id);
        setNotes(remainingNotes);
      });
  };

  return (
    <div>
      <Sidebar notes={notes} />
      <ReactQuill className="editor" />
    </div>
  );
}

export default App;
