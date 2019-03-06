import React, { Component } from 'react';
import FormContext from '../FormContext';

class Submit extends Component {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { onSubmit } = this.context;
    onSubmit();
  }

  checkError() {
    const { fields } = this.context;
    const err = Object.keys(fields).filter(key => fields[key].error);
    return err.length;
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
