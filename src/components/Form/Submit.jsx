import React, { Component } from 'react';
import FormContext from './FormContext';

class Submit extends Component {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const { fields, onSubmit } = this.context;

    onSubmit(fields);
  }

  render() {
    const { onClick, children, ...rest } = this.props;

    return (
      <button type="submit" onClick={this.handleClick} {...rest}>
        {children}
      </button>
    );
  }
}

export default Submit;
