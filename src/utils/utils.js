import {
  DAY_IN_MILLIS,
  DAYS_IN_WEEK,
  NO_OF_DAYS_IN_WEEK
} from './../constants';

/**
 * Processes passes date value and return readable value from it.
 *
 * If date is within a passed week returns day name. For older dates return date in dd/mm/yyyy
 *
 * @param {string} date - ISO date string
 *
 * @returns {string} readable date - Day Name or date in dd/mm/yyyy
 */
export const getDate = date => {
  const dateValue = new Date(date);
  const diffInDays = (Date.now() - dateValue) / DAY_IN_MILLIS;

  if (diffInDays > NO_OF_DAYS_IN_WEEK - 1) {
    return dateValue.toLocaleDateString();
  } else {
    return DAYS_IN_WEEK[dateValue.getDay()];
  }
};

/**
 * Sorts the notes by updation date
 */
export const sortByDateCreated = (a, b) => a.updatedAt - b.updatedAt;

/**
 * Format the notes data as per our requirement
 *
 * @param {array} notes
 * @returns {array}
 */
export const formatNotes = notes => {
  return notes.sort(sortByDateCreated).map(note => {
    return {
      ...note,
      updatedAt: getDate(note.updatedAt)
    };
  });
};
