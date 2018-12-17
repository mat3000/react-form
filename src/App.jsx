import React, { Component } from 'react';
import Form, { Input, Test, Submit } from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={e => console.log(e)}>
          <Input name="input" />

          <Test name="test">coucou</Test>
          <Test name="test">coucou</Test>

          <Submit>Button2</Submit>
        </Form>
      </div>
    );
  }
}

export default App;
