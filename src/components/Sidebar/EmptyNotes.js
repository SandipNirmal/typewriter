import React from 'react';

import Typography from '../Typography/Typography';

import './EmptyNotes.css';

export function EmptyNotes() {
  return (
    <div className="container flex-center">
      <Typography variant="caption1">
        No Note Available, please add one.
      </Typography>
    </div>
  );
}
