import React from 'react';

import Typography from '../Typography/Typography';
import { getDate } from '../../utils';

export function ListItem({
  title = 'Test Title',
  id,
  content = 'Some random content for the notes.',
  updatedAt = new Date()
}) {
  return (
    <section>
      <Typography variant="callout">{title}</Typography>
      <Typography variant="subhead">
        {getDate(updatedAt)} {`${content.substr(0, 20)}...`}
      </Typography>
    </section>
  );
}

export default React.memo(ListItem);
