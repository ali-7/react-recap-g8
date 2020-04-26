import React from 'react';
import FetchData from '../FetchData';

const translate = (str) => {
  if (str === 'quis ut nam facilis et officia qui!') {
    return 'For easy, as anyone who has responsibilities';
  } else {
    return 'async calls ';
  }
};

function EX2() {
  return <FetchData translate={translate} />;
}

export default EX2;
