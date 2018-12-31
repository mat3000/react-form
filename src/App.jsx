import React, { Component } from 'react';
import Form, {
  Input,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Option,
  Submit,
} from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={e => console.log(e)} onChange={e => console.log(e)}>
          {/*  */}

          <Input
            name="input-1"
            defaultValue="123456"
            validator={v => (v.length < 5 ? '' : '/!\\ <5')}
          />

          <Input
            name="input-2"
            validator={v => (v.length > 5 ? '' : '/!\\ >5')}
          />

          <Input
            name="input-3"
            disabled
            validator={v => (v.length > 5 ? '' : '/!\\ >5')}
          />

          <Textarea
            name="textarea-1"
            defaultValue="okokokok"
            disabled
            validator={v => (v.length < 5 ? '' : '/!\\ <5')}
          />

          <Checkbox
            name="checkbox-1"
            disabled
            validator={v => (v ? '' : 'error')}
          />

          <RadioGroup
            name="radio-1"
            disabled
            validator={v => (v === 'oui' ? '' : 'error')}
          >
            <Radio value="oui" />
            <Radio value="non" />
          </RadioGroup>

          <Select
            name="select-1"
            defaultValue=""
            disabled
            validator={v => (v === 'aaa' ? '' : 'error')}
          >
            <Option value="" disabled>
              select...
            </Option>
            <Option value="aaa">a a a</Option>
            <Option value="bbb">b b b</Option>
            <Option value="ccc">c c c</Option>
          </Select>

          <Submit>Button</Submit>
        </Form>
      </div>
    );
  }
}

export default App;
