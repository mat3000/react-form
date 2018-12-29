import React from 'react';
import { RadioContext } from './FormContext';
import { asField } from './Field';

const RadioGroup = props => {
  const { name, children } = props;

  return (
    <RadioContext.Provider value={{ name }}>
      <p>{children}</p>
    </RadioContext.Provider>
  );
};

export default asField(RadioGroup);
