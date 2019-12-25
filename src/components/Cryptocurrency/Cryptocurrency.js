import React from 'react';

const cryptocurrency = (props) => (
  <div>
  	<span>{props.name}</span> | <span>{props.symbol}</span> | <span>{props.price}</span>
  </div>
);

export default cryptocurrency;