import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';

import db from './services/StorageService';
import { Sidebar } from './components';

import { sortByDateCreated, debounce } from './utils';

import './App.css';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(0);
  const [selectedNoteId, setSelectedNoteId] = useState(0);

  useEffect(() => {
    db.table('notes')
      .toArray()
      .then(notes => {
        setNotes(notes.sort(sortByDateCreated));
        // TODO - Change Selection logic to id instead of index
        notes.length && setSelectedNote(0);
      });
  }, []);

  useEffect(() => {
    const selectedItem = notes && notes[selectedNote];
    console.log('selectedItem', selectedItem);
    selectedItem && setSelectedNoteId(selectedItem.id);
  }, [selectedNote, notes]);

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
        onChange={value => {
          console.log('value', value);
          debounce(
            () =>
              handleUpdateNote(
                selectedNoteId,
                value.substr(0, 20).replace('<[^>]*>', ''),
                value
              ),
            5000
          );
        }}
      />
    </div>
  );
}

export default App;
