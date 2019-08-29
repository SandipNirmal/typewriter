import Dexie from 'dexie';

const db = new Dexie('Notes');

db.version(1).stores({ notes: '++id' });

export default db;
/**
 * Wrapper around localstorage, which acts as a data store for notes
 */

/**
 * Note Object Shape
 */
const Note = {
  id: '', // string
  title: '', // string
  content: '', // string
  createdAt: '', // timestamp
  updatedAt: '', // timestamp
  isArchieved: false // boolean
};

/**
 * Stores a note in notes dataset
 *
 * @param {object} note
 */
export const createNote = () => {};

/**
 * Return Note by id
 */
export const getNote = id => {};

/**
 * Search note by title
 */
export const searchNote = title => {};

/**
 * Remove note
 */
export const deleteNote = () => {};

/**
 * Update note by Id
 */
export const editNote = id => {};
