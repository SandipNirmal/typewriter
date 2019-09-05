import {
  DAY_IN_MILLIS,
  DAYS_IN_WEEK,
  NO_OF_DAYS_IN_WEEK
} from './../constants';

/**
 * Formats the date in hh:mm AM/PM format
 *
 * @param {Date} date
 *
 * @returns {String}
 */
export const formatTime = date => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours > 12;

  return `${isPM ? hours - 12 : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  } ${isPM ? 'PM' : 'AM'}`;
};

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

  if (diffInDays < 1) {
    return formatTime(date);
  } else if (diffInDays > NO_OF_DAYS_IN_WEEK - 1) {
    return dateValue.toLocaleDateString();
  } else {
    return DAYS_IN_WEEK[dateValue.getDay()];
  }
};

/**
 * Sorts the notes by updation date
 */
export const sortByDateCreated = (a, b) => b.updatedAt - a.updatedAt;
