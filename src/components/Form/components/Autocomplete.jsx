import React, { Component } from 'react';
import { asField } from '../Field';

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    const { options } = this.props;

    this.state = {
      options,
      newOption: false,
      status: false,
    };
  }

  filter(value) {
    const { options } = this.props;
    const filtered = options.filter(e => new RegExp(value, 'gi').test(e));
    this.setState({ options: filtered, newOption: !filtered.length });
  }

  render() {
    const { options, status, newOption } = this.state;
    const { state, api, name, disabled, onChange, ...etc } = this.props;
    const { setValue, setTouched, setError, validator } = api;
    const { value, error } = state;

    return (
      <div>
        <label htmlFor={`label-${name}`}>
          <input
            type="text"
            value={disabled ? '' : value}
            id={`label-${name}`}
            onChange={e => {
              this.filter(e.target.value);
              setValue(e.target.value);
              setTouched();
              if (onChange) onChange(e.target.value);
            }}
            onBlur={e => {
              setError(e.target.value ? validator(e.target.value) : '');
              setTimeout(() => this.setState({ status: false }), 200);
            }}
            onFocus={e => {
              this.filter(e.target.value);
              this.setState({ status: true });
            }}
            disabled={disabled}
            {...etc}
          />
        </label>
        {status && (
          <select size="5" onChange={e => setValue(e.target.value)}>
            {!options.length && <option disabled>Aucun résultat...</option>}
            {options.map((option, i) => (
              <option key={i}>{option}</option>
            ))}
          </select>
        )}
        {newOption && <div>Créer client ?</div>}
        {!disabled && error ? (
          <span style={{ display: 'block', color: 'red' }}>{error}</span>
        ) : null}
      </div>
    );
  }
}

export default asField(Autocomplete);
