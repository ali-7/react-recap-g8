import React from 'react';
// import PropTypes from 'prop-types';

function Message({ color, children }) {
  return <div style={{ color }}>{children}</div>;
}

export default Message;
