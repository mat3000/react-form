import React from 'react';
import { asField } from '../Field';

const Checkbox = ({ state, api, ...props }) => {
  const { setValue, setTouched, setError, validator } = api;
  const { value, error } = state;
  const { name, disabled, ...etc } = props;

  return (
    <p>
      <label htmlFor={`label-${name}`}>
        <input
          type="checkbox"
          value={disabled ? '' : value}
          id={`label-${name}`}
          onChange={e => {
            setValue(e.target.checked);
            setTouched();
            setError(validator(e.target.checked));
          }}
          disabled={disabled}
          {...etc}
        />
        test
      </label>
      {!disabled && error ? (
        <span style={{ display: 'block', color: 'red' }}>{error}</span>
      ) : null}
    </p>
  );
};

export default asField(Checkbox);
