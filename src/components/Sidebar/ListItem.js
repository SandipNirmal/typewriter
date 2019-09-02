import React from 'react';
import classNames from 'classnames';

import Typography from '../Typography/Typography';
import Dot from './../Separator/Dot';
import { getDate } from '../../utils';

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
          {title}
        </Typography>
        <Typography variant="subhead">
          {getDate(updatedAt)} <Dot />
          <span className="light"> {`${content.substr(0, 20)}...`}</span>
        </Typography>
      </div>

      <button className="delete-item" onClick={onDelete}>
        X
      </button>
    </section>
  );
}

export default React.memo(ListItem);
