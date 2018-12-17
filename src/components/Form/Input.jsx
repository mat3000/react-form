import React, { Component } from 'react';
import FormContext from './FormContext';

class Input extends Component {
  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { update } = this.context;
    const { name } = this.props;

    update(name, event.target.value);
  }

  render() {
    const { fields } = this.context;
    const { name } = this.props;

    return (
      <input
        type="text"
        value={fields[name] || ''}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
