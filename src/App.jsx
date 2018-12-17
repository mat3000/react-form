import React, { Component } from 'react';
import Form, { Input, Submit } from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={e => console.log(e)}>
          <Input name="input-1" />
          <Input name="input-2" />

          <Submit>Button2</Submit>
        </Form>
      </div>
    );
  }
}

export default App;
