import React, { Component } from 'react';

const MyContext = React.createContext({
  fields: {},
  onSubmit: () => {},
});

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      update: (name, value) => {
        this.setState(state => {
          return state.fields[name] = value;
        })
      }
    }
  }

  render() {
    const {children, onSubmit, ...rest} = this.props;

    return (
      <MyContext.Provider value={{onSubmit, ...this.state}}>
        <form {...rest}>
          {children}
        </form>
      </MyContext.Provider>
    );
  }
}



class Input extends Component {

  static contextType = MyContext;

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.context.update(this.props.name, event.target.value);
  }

  render() {
    return <input type="text" value={this.context.fields[this.props.name] || ''} onChange={this.handleChange} />;
  }
}



class Select extends Component {

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
    return (
      <select onChange={this.handleChange} >
        {children}
      </select>);
  }
}



class Option extends Component {
  render() {
    const { value, children, ...other } = this.props;

    return <option value={value || ''} {...other}>{children}</option>;
  }
}



class Submit extends Component {

  static contextType = MyContext;

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.context.onSubmit(this.context.fields);
  }

  render() {
    const {onClick, ...rest} = this.props;

    return <button onClick={this.handleClick} {...rest}>{this.props.children}</button>;
  }
}

export default Form;
export { Input, Select, Option, Submit };
