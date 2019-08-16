import React from 'react';

import Typography from '../Typography/Typography';
import Dot from './../Separator/Dot';
import { getDate } from '../../utils';

import './ListItem.css';

export function ListItem({
  title = 'Test Title',
  id,
  content = 'Some random content for the notes.',
  updatedAt = new Date()
}) {
  return (
    <section className="list-item">
      <Typography variant="callout" className="bold">
        {title}
      </Typography>
      <Typography variant="subhead">
        {getDate(updatedAt)} <Dot />
        <span className="light"> {`${content.substr(0, 20)}...`}</span>
      </Typography>
    </section>
  );
}

export default React.memo(ListItem);
