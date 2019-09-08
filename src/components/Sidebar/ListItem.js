import React from 'react';
import classNames from 'classnames';
import { FaTrash } from 'react-icons/fa';

import Typography from '../Typography/Typography';
import { getDate, removeHTMLTags } from '../../utils';

import './ListItem.css';

export function ListItem({
  title = 'Test Title',
  id,
  content = 'Some random content for the notes.',
  updatedAt = new Date(),
  isSelected,
  onSelect,
  onDelete
}) {
  return (
    <section
      className={classNames('list-item', { 'list-item-selected': isSelected })}
    >
      <div className="list-item-content" onClick={onSelect}>
        <Typography variant="callout" className="bold">
          {removeHTMLTags(title)}
        </Typography>
        <div>
          <Typography variant="caption1" className="list-item-time bold">
            {getDate(updatedAt)}
          </Typography>
          <Typography variant="caption1">
            {`${removeHTMLTags(content).substr(0, 20)}...`}
          </Typography>
        </div>
      </div>

      <span className="icon delete-item" onClick={onDelete}>
        <FaTrash />
      </span>
    </section>
  );
}

export default React.memo(ListItem);
