import React, { Component } from 'react';
import { asField } from './Field';
import { RadioContext } from './FormContext';

class Radio extends Component {
  static contextType = RadioContext;

  render() {
    const { validator, name, onChange, defaultvalue, ...etc } = this.context;
    const { children, api, value } = this.props;
    const { setValue, setTouched, setError } = api;
    const uniqid = `label-${Math.round(Math.random() * 100000)}`;

    etc.defaultChecked = defaultvalue === value;

    return (
      <label htmlFor={uniqid}>
        <input
          type="radio"
          name={name}
          value={value}
          id={uniqid}
          onChange={e => {
            setValue(e.target.value, name);
            setTouched(name);
            setError(validator(e.target.value), name);
            if (onChange) onChange(e.target.value);
          }}
          {...etc}
        />
        {children || value}
      </label>
    );
  }
}

export default asField(Radio);
