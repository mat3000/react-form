import React, { Component } from 'react';
import Form, { Input, Select, Option, Submit } from './components/Test/Test'

class App extends Component {
  render() {
    return (
      <div>

        <Form onSubmit={e => console.log(e)} >

          <Input name="test1" />

          <Input name="test2" />

          <Select name="test3" defaultValue="" >
            <Option disabled>select...</Option>
            <Option value="val-1">val 1</Option>
            <Option value="val-2">val 2</Option>
          </Select>

          <Submit>Button2</Submit>

        </Form>
          
      </div>
    );
  }
}

export default App;
