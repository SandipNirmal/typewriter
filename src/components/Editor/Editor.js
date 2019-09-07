import React from 'react';
import ReactQuill from 'react-quill';

import { debounce } from './../../utils';

export function Editor({ selectedNote, handleNoteUpdate }) {
  const handleUpdateNote = async value => {
    await debounce(() => {
      handleNoteUpdate({
        ...selectedNote,
        title: value.substr(0, 20).replace('<[^>]*>', ''),
        content: value
      });
    }, 5000);
  };

  return (
    <ReactQuill
      className="editor"
      value={selectedNote ? selectedNote.content : ''}
      onChange={handleUpdateNote}
    />
  );
}
