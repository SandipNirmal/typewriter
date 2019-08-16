import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  color: PropTypes.string
};

const defaultProps = {
  size: 'small',
  color: '#888888'
};

/**
 * Generate style for Dot
 */
const getStyle = (size, color) => {
  let width = 8;

  switch (size) {
    case 'tiny':
      width = 4;
      break;

    case 'small':
      width = 8;
      break;

    case 'medium':
      width = 12;
      break;

    case 'large':
      width = 16;
      break;

    case 'huge':
      width = 20;
      break;

    default:
      width = 8;
      break;
  }

  return {
    background: color || '#888888',
    width,
    height: width,
    borderRadius: width / 2,
    display: 'inline-block'
  };
};

function Dot({ size, color }) {
  return <div style={getStyle(size, color)} />;
}

Dot.propTypes = propTypes;
Dot.defaultProps = defaultProps;

export default React.memo(Dot);
