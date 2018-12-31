import React, { Component } from 'react';
import { asField } from './Field';
import { RadioContext } from './FormContext';

class Radio extends Component {
  static contextType = RadioContext;

  render() {
    const { name, disabled, validator } = this.context;
    const { api, value } = this.props;
    const { setValue, setTouched, setError } = api;
    const uniqid = `label-${Math.round(Math.random() * 100000)}`;

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
          }}
          disabled={disabled}
        />
        {value}
      </label>
    );
  }
}

export default asField(Radio);
