import React from 'react';
import PropTypes from 'prop-types';

function Message({ ali, children }) {
  console.log('ali:', typeof ali);
  return <div style={{ color: ali }}>{children}</div>;
}

Message.propTypes = {
  ali: PropTypes.string,
};

Message.defaultProps = {
  ali: 'blue',
};

export default Message;
