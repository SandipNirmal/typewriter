import React from 'react';
import ReactQuill from 'react-quill';

import { debounce, removeHTMLTags } from './../../utils';

export function Editor({ selectedNote, handleNoteUpdate }) {
  const handleUpdateNote = (value, delta) => {
    console.log('Handle Change', delta);
    !delta.ops.some(item => item.delete) &&
      // debounce(
      handleNoteUpdate({
        ...selectedNote,
        title: removeHTMLTags(value).substr(0, 20),
        content: value
      });
    //   ,
    //   1500
    // );
  };

  console.log('selectedNote', selectedNote);

  return (
    <ReactQuill
      className="editor"
      value={selectedNote ? selectedNote.content : ''}
      onChange={handleUpdateNote}
    />
  );
}
