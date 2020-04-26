import React from 'react';
import Welcome from '../Welcome';
import Message from '../Message';

function Ex1() {
  return (
    <>
      <Welcome name='Ali'>
        <Message ali='red'>Hi from msg</Message>
      </Welcome>
    </>
  );
}

export default Ex1;
