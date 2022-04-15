import React from 'react';

const BoilingVerdict = props => {
  if (props.celsius >= 100) {
    return <p>вода закипит</p>;
  }
  return <p>вода не закипит</p>;
};

export default BoilingVerdict;
