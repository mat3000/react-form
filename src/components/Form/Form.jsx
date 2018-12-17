import React, { Component } from 'react';
import FormContext from './FormContext';
import Input from './Input';
import Submit from './Submit';

import asField from './asField';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      update: (name, value) => {
        this.setState(state => {
          const { fields } = state;
          fields[name] = value;
          return { fields, ...state };
        });
      },
    };
  }

  render() {
    const { children, onSubmit, ...rest } = this.props;

    return (
      <FormContext.Provider value={{ onSubmit, ...this.state }}>
        <form {...rest}>{children}</form>
      </FormContext.Provider>
    );
  }
}

const Test = asField(a => {
  console.log('Test -> ', a);
  return (
    <input
      type="text"
      value={a.fields[a.name] || ''}
      onChange={e => {
        console.log(e.target.value);
        a.update(a.name, e.target.value);
      }}
    />
  );
});

/* class Input extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.context.update(this.props.name, event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        value={this.context.fields[this.props.name] || ''}
        onChange={this.handleChange}
      />
    );
  }
} */

/* class Textarea extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.context.update(this.props.name, event.target.value);
  }

  render() {
    const { fields } = this.context;
    return (
      <textarea
        type="text"
        value={fields[this.props.name] || ''}
        onChange={this.handleChange}
      />
    );
  }
} */

/* class Select extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.context.update(this.props.name, event.target.value);
  }

  render() {
    const { children } = this.props;
    return <select onChange={this.handleChange}>{children}</select>;
  }
} */

/* class Option extends Component {
  render() {
    const { value, children, ...other } = this.props;

    return (
      <option value={value || ''} {...other}>
        {children}
      </option>
    );
  }
} */

export default Form;
export { Input, Test, Submit };