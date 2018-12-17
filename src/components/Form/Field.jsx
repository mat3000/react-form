import React, { PureComponent } from 'react';
import FormContext from './FormContext';

class Input extends PureComponent {
  static contextType = FormContext;

  render() {
    console.log(this.props);
    console.log(this.context);

    const { name, children, component } = this.props;
    const { update, fields } = this.context;

    if (component) {
      return React.createElement(component, { name, update, fields }, children);
    }

    return children;
  }
}

export default Input;
