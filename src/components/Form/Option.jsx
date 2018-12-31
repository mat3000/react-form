import React from 'react';

const Option = props => {
  const { children, ...other } = props;
  return <option {...other}>{children}</option>;
};

export default Option;
