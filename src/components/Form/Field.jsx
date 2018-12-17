import React, { Component } from 'react';
import FormContext from './FormContext';

class Field extends Component {
  static contextType = FormContext;

  render() {
    // console.log(this.props);
    // console.log(this.context);

    const { name, children, component } = this.props;
    const { update, fields } = this.context;
    const test = { name, update, value: fields[name] };

    if (component) {
      return React.createElement(component, test, children);
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
