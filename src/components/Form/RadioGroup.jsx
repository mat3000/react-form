import React from 'react';
import { RadioContext } from './FormContext';
import { asField } from './Field';

const RadioGroup = ({ state, api, ...props }) => {
  const { validator } = api;
  const { error } = state;
  const { children, ...etc } = props;

  return (
    <RadioContext.Provider value={{ validator, ...etc }}>
      <p>
        {children}
        {error ? (
          <span style={{ display: 'block', color: 'red' }}>{error}</span>
        ) : null}
      </p>
    </RadioContext.Provider>
  );
};

export default asField(RadioGroup);
