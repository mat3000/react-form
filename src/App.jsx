import React, { Component } from 'react';
import Form, {
  Input,
  // Textarea,
  // Checkbox,
  // Radio,
  // RadioGroup,
  // Select,
  // Option,
  // Captcha,
  Autocomplete,
  Submit,
} from './components/Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // status: 'false',
    };
  }

  render() {
    // const { status } = this.state;
    return (
      <div>
        <Form
          onSubmit={e => console.log('onSubmit ->', e)}
          onChange={e => console.log('onChange ->', e)}
        >
          <Input
            type="text"
            name="inputText"
            placeholder="Mon placeholder"
            value="Ma valeur"
            validator={e => (e ? '' : 'error')}
          />

          <Autocomplete
            name="autocomplete"
            placeholder="Mon placeholder"
            options={['un', 'deux', 'trois']}
            // value="un"
            validator={e => (e ? '' : 'error')}
            // disabled
          />

          {/* <Captcha name="captcha" /> */}

          <Submit>Button</Submit>
        </Form>
      </div>
    );
  }
}

export default App;
