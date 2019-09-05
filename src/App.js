import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';

import db from './services/StorageService';
import { Sidebar } from './components';

import { sortByDateCreated } from './utils';

import './App.css';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(0);

  useEffect(() => {
    db.table('notes')
      .toArray()
      .then(notes => {
        setNotes(notes.sort(sortByDateCreated));
        // TODO - Change Selection logic to id instead of index
        notes.length && setSelectedNote(0);
      });
  }, []);

  const handleAddNote = ({ title = 'test', content = 'some test content' }) => {
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
        setNotes(
          [...notes, Object.assign({}, note, { id })].sort(sortByDateCreated)
        );
      });
  };

  const handleUpdateNote = (id, title, content) => {
    // TODO - If content is blank delete note (archieve)
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
        setNotes(newNotes.sort(sortByDateCreated));
      });
  };

  const handleDeleteNote = id => {
    db.table('notes')
      .delete(id)
      .then(() => {
        const remainingNotes = notes
          .filter(note => note.id !== id)
          .sort(sortByDateCreated);

        setNotes(remainingNotes);
        remainingNotes.length && setSelectedNote(0);
      });
  };

  return (
    <div>
      <Sidebar
        notes={notes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        handleDeleteNote={handleDeleteNote}
        handleAddNote={handleAddNote}
      />
      <ReactQuill
        className="editor"
        value={
          notes.length ? notes[selectedNote] && notes[selectedNote].content : ''
        }
        // onChange={handleUpdateNote}
      />
    </div>
  );
}

export default App;
