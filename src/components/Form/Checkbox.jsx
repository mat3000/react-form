import React from 'react';
import { asField } from './Field';

const Checkbox = props => {
  const {
    name,
    value,
    setValue,
    error,
    setTouched,
    setError,
    validator,
  } = props;

  return (
    <p>
      <label htmlFor={`label-${name}`}>
        <input
          type="checkbox"
          value={value}
          id={`label-${name}`}
          onChange={e => {
            setValue(e.target.checked);
            setTouched();
            setError(validator(e.target.checked));
          }}
        />
        test
      </label>
      {error ? (
        <span style={{ display: 'block', color: 'red' }}>{error}</span>
      ) : null}
    </p>
  );
};

export default asField(Checkbox);
