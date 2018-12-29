import React, { Component } from 'react';
import { asField } from './Field';
import { RadioContext } from './FormContext';

class Radio extends Component {
  static contextType = RadioContext;

  render() {
    const { name } = this.context;
    const {
      // name,
      test,
      setValue,
      // error,
      setTouched,
      setError,
      validator,
    } = this.props;
    const uniqid = `label-${Math.round(Math.random() * 100000)}`;

    return (
      <label htmlFor={uniqid}>
        <input
          type="radio"
          // name={name}
          value={test}
          id={`label-${name + uniqid}`}
          onChange={e => {
            console.log(name, e.target.value);
            setValue(e.target.value);
            setTouched();
            // setError(validator(e.target.checked));
          }}
        />
        {test}
      </label>
    );
  }
}

export default asField(Radio);
