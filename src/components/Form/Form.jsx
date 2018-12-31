import React, { Component } from 'react';
import FormContext from './FormContext';

import Input from './Input';
import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import Select from './Select';
import Option from './Option';
import Submit from './Submit';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        // name : { value: 'String', touched: false, error: 'String' }
      },
      setValue: (value, name) => {
        this.setState(state => {
          const { fields } = state;
          fields[name] = fields[name] || {};
          fields[name].value = value;
          return { fields, ...state };
        });
      },
      setError: (value, name) => {
        this.setState(state => {
          const { fields } = state;
          fields[name] = fields[name] || {};
          fields[name].error = value;
          return { fields, ...state };
        });
      },
      setTouched: (value, name) => {
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
      const { props } = element;
      const key = Object.keys(fields).filter(k => props.name === k);
      const field = fields[key];
      if (props.name && props.validator && !props.disabled) {
        const result = props.validator(field.value);
        setError(result, key);
      }
    });

    setTimeout(() => {
      if (!this.checkError()) {
        onSubmit(fields);
      }
    });
  }

  handleChange() {
    const { onChange } = this.props;
    const { fields } = this.state;

    setTimeout(() => {
      onChange(fields);
    });
  }

  checkError() {
    const { fields } = this.state;
    const err = Object.keys(fields).filter(key => fields[key].error);
    return err.length;
  }

  render() {
    const { children, onSubmit, onChange, ...etc } = this.props;

    return (
      <FormContext.Provider value={{ ...this.state }}>
        <form onChange={e => this.handleChange(e)} {...etc}>
          {children}
        </form>
      </FormContext.Provider>
    );
  }
}

export default Form;
export { Input, Textarea, Checkbox, Radio, RadioGroup, Select, Option, Submit };
