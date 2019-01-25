import React from 'react';
import { asField } from './Field';

const Input = ({ state, api, ...props }) => {
  const { setValue, setTouched, setError, validator } = api;
  const { value, error } = state;
  const { name, disabled, onChange, ...etc } = props;

  return (
    <p>
      <label htmlFor={`label-${name}`}>
        <input
          value={value}
          id={`label-${name}`}
          onChange={e => {
            setValue(e.target.value);
            setTouched();
            if (onChange) onChange(e.target.value);
          }}
          onBlur={e => {
            setError(e.target.value ? validator(e.target.value) : '');
          }}
          disabled={disabled}
          {...etc}
        />
      </label>
      {error ? (
        <span style={{ display: 'block', color: 'red' }}>{error}</span>
      ) : null}
    </p>
  );
};

export default asField(Input);
