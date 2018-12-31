import React, { Component } from 'react';
import FormContext from './FormContext';

class Field extends Component {
  static contextType = FormContext;

  componentDidMount() {
    const { fields, setValue } = this.context;
    const { name, defaultValue } = this.props;
    const { value } = fields[name] || {};

    if (name) {
      setValue(value || defaultValue || '', name);
    }
  }

  render() {
    const {
      name,
      children,
      component,
      validator,
      defaultValue,
      ...etc
    } = this.props;
    const { setValue, setTouched, setError, fields } = this.context;
    const { value, error, touched } = fields[name] || {};

    const props = {
      api: {
        setValue: (val, n = name) => setValue(val, n),
        setTouched: (n = name) => setTouched(true, n),
        setError: (val, n = name) => setError(val, n),
        validator: val => (validator ? validator(val) : ''),
      },
      state: {
        value: value || (defaultValue && !touched ? defaultValue : ''),
        error,
      },
      name,
      ...etc,
    };

    if (component) {
      return React.createElement(component, props, children);
    }

    return children;
  }
}

const asField = Comp => {
  const AsField = props => <Field component={Comp} {...props} />;
  return AsField;
};

export default Field;
export { asField };
