import React from 'react';

import './Typography.css';

const Typography = ({
  variant = 'body1',
  children,
  className = '',
  ...other
}) => {
  let Element = 'p';
  let classname = 'body1';

  switch (variant.toLowerCase()) {
    case 'largetitle':
      Element = 'h1';
      classname = `large-title ${className}`;
      break;

    case 'title1':
      Element = 'h2';
      classname = `title1 ${className}`;
      break;

    case 'title2':
      Element = 'h3';
      classname = `title2 ${className}`;
      break;

    case 'title3':
      Element = 'h4';
      classname = `title2 ${className}`;
      break;

    case 'headline':
      Element = 'h5';
      classname = `headline ${className}`;
      break;

    case 'body':
      Element = 'p';
      classname = `body ${className}`;
      break;

    case 'callout':
      Element = 'p';
      classname = `callout ${className}`;
      break;

    case 'subhead':
      Element = 'h6';
      classname = `subhead ${className}`;
      break;

    case 'footnote':
      Element = 'span';
      classname = `footnote ${className}`;
      break;

    case 'caption1':
      Element = 'span';
      classname = `caption1 ${className}`;
      break;

    case 'caption2':
      Element = 'span';
      classname = `caption2 ${className}`;
      break;

    default:
      Element = 'p';
      classname = `body ${className}`;
  }

  return (
    <Element className={classname} {...other}>
      {children}
    </Element>
  );
};

export default React.memo(Typography);
