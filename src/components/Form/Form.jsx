import React, { Component } from 'react';
import FormContext from './FormContext';

import Input from './Input';
import Checkbox from './Checkbox';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import Submit from './Submit';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        // name : { value: 'String', touched: false, error: 'String' }
      },
      setValue: (name, value) => {
        this.setState(state => {
          const { fields } = state;
          fields[name] = fields[name] || {};
          fields[name].value = value;
          return { fields, ...state };
        });
      },
      setError: (name, value) => {
        this.setState(state => {
          const { fields } = state;
          fields[name] = fields[name] || {};
          fields[name].error = value;
          return { fields, ...state };
        });
      },
      setTouched: (name, value = true) => {
        this.setState(state => {
          const { fields } = state;
          fields[name] = fields[name] || {};
          fields[name].touched = value;
          return { fields, ...state };
        });
      },
      onSubmit: () => this.handleClick(),
    };
  }

  handleClick() {
    const { onSubmit, children } = this.props;
    const { fields, setError } = this.state;

    children.forEach(element => {
      Object.keys(fields).forEach(key => {
        const field = fields[key];
        if (
          element.props.name &&
          element.props.name === key &&
          element.props.validator
        ) {
          const result = element.props.validator(field.value);
          setError(key, result);
        }
      });
    });

    if (!this.checkError()) {
      onSubmit(fields);
    }
  }

  checkError() {
    const { fields } = this.state;
    const err = Object.keys(fields).filter(key => fields[key].error);
    return err.length;
  }

  render() {
    const { children, onSubmit, ...rest } = this.props;

    return (
      <FormContext.Provider value={{ ...this.state }}>
        <form {...rest}>{children}</form>
      </FormContext.Provider>
    );
  }
}

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
export { Input, Checkbox, Radio, RadioGroup, Submit };
