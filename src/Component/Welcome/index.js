import React from 'react';

function Welcome(props) {
  console.log('props:', props);
  return (
    <>
      <h1>Hi, I'm {props.name}</h1>
      {props.children}
    </>
  );
}

export default Welcome;
