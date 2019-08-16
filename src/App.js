import React from 'react';
import ReactQuill from 'react-quill';

import { Sidebar } from './components';

import './App.css';
import 'react-quill/dist/quill.snow.css';

function App() {
  return (
    <div>
      <Sidebar />
      <ReactQuill className="editor" />
    </div>
  );
}

export default App;
