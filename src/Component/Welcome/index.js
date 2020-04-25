import React from 'react';

function Welcome(props) {
  return (
    <div>
      Hi I'm {props.name}
      {props.children}
    </div>
  );
}

export default Welcome;
