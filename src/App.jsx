import React, { Component } from 'react';
import Form, {
  Input,
  // Checkbox,
  Radio,
  RadioGroup,
  Submit,
} from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={e => console.log(e)}>
          {/*  */}

          {/* <Input
            name="input-1"
            validator={v => (v.length < 5 ? '' : '/!\\ <5')}
            defaultValue="mon test"
          /> */}

          {/* <Input
            name="input-2"
            validator={v => (v.length > 5 ? '' : '/!\\ >5')}
          /> */}

          <Input name="input-3" />

          {/* <Checkbox name="checkbox-4" validator={v => (v ? '' : 'error')} /> */}

          <RadioGroup name="Radio-4">
            <Radio value="oui" />
            <Radio value="non" />
          </RadioGroup>

          <Submit>Button</Submit>
        </Form>
      </div>
    );
  }
}

export default App;
