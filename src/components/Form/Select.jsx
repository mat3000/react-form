import React from 'react';
import { asField } from './Field';

const Select = ({ state, api, ...props }) => {
  const { setValue, setTouched, setError, validator } = api;
  const { value, error } = state;
  const { name, disabled, children, ...etc } = props;

  return (
    <p>
      <label htmlFor={`label-${name}`}>
        <select
          type="text"
          value={value}
          id={`label-${name}`}
          onChange={e => {
            setValue(e.target.value);
            setTouched();
            if (e.target.value) setError(validator(e.target.value));
            else setError('');
          }}
          disabled={disabled}
          {...etc}
        >
          {children}
        </select>
      </label>
      {error ? (
        <span style={{ display: 'block', color: 'red' }}>{error}</span>
      ) : null}
    </p>
  );
};

export default asField(Select);
