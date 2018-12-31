import React from 'react';
import { asField } from './Field';

/* class Input extends Component {
  static contextType = FormContext;

  componentDidMount() {
    const { fields, setValue } = this.context;
    const { name, defaultValue } = this.props;
    const { value } = fields[name] || {};

    if (!value && defaultValue) {
      setValue(name, defaultValue);
    }
  }

  render() {
    const { fields, setValue, setError, setTouched } = this.context;
    const { name, defaultValue, validator } = this.props;
    const { value, error, touched } = fields[name] || {};
    const newValue = value || (defaultValue && !touched ? defaultValue : '');

    return (
      <p>
        <label htmlFor={`label-${name}`}>
          test
          <input
            type="text"
            value={newValue}
            id={`label-${name}`}
            onChange={e => {
              setValue(name, e.target.value);
              setTouched(name);
            }}
            onBlur={e => {
              if (e.target.value)
                setError(name, validator ? validator(e.target.value) : '');
              else setError(name, '');
            }}
          />
        </label>
        {error ? (
          <span style={{ display: 'block', color: 'red' }}>{error}</span>
        ) : null}
      </p>
    );
  }
}

export default Input; */

const Input = ({ state, api, ...props }) => {
  const { setValue, setTouched, setError, validator } = api;
  const { value, error } = state;
  const { name, disabled, ...etc } = props;

  return (
    <p>
      <label htmlFor={`label-${name}`}>
        <input
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

export default asField(Input);
