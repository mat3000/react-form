import React from 'react';
import { RadioContext } from './FormContext';
import { asField } from './Field';

const RadioGroup = ({ state, api, ...props }) => {
  const { validator } = api;
  const { error } = state;
  const { disabled, children, ...etc } = props;

  return (
    <RadioContext.Provider value={{ validator, disabled, ...etc }}>
      <p>
        {children}
        {!disabled && error ? (
          <span style={{ display: 'block', color: 'red' }}>{error}</span>
        ) : null}
      </p>
    </RadioContext.Provider>
  );
};

export default asField(RadioGroup);
