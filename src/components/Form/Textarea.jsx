import React from 'react';
import { asField } from './Field';

const Textarea = ({ state, api, ...props }) => {
  const { setValue, setTouched, setError, validator } = api;
  const { value, error } = state;
  const { name, disabled, ...etc } = props;

  return (
    <p>
      <label htmlFor={`label-${name}`}>
        <textarea
          type="text"
          value={value}
          id={`label-${name}`}
          onChange={e => {
            setValue(e.target.value);
            setTouched();
          }}
          onBlur={e => {
            if (e.target.value) setError(validator(e.target.value));
            else setError('');
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

export default asField(Textarea);
