import React, { Component } from 'react';
import FormContext from './FormContext';

class Field extends Component {
  static contextType = FormContext;

  componentDidMount() {
    // const { name, component } = this.props;
    // const { fields } = this.context;
    // fields[name].component = component;
    // component.validator('coucou');
    // console.log(name);
    // console.log(this.props);

    const { fields, setValue } = this.context;
    const { name, defaultValue } = this.props;
    const { value } = fields[name] || {};

    // if (!value && defaultValue) {
    setValue(name, value || defaultValue || '');
    // }
  }

  render() {
    const {
      name,
      value: test,
      children,
      component,
      validator,
      defaultValue,
    } = this.props;
    const { setValue, setTouched, setError, fields } = this.context;
    const { value, error, touched } = fields[name] || {};

    const props = {
      name,
      test,
      setValue: val => setValue(name, val),
      setTouched: () => setTouched(name),
      setError: val => setError(name, val),
      validator: val => (validator ? validator(val) : ''),
      error,
      value: value || (defaultValue && !touched ? defaultValue : ''),
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
