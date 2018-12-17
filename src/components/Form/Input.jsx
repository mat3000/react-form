import React from 'react';
import { asField } from './Field';

const Input = asField(props => {
  console.log('Test -> ', props);

  return (
    <input
      type="text"
      // value={props.fields[props.name] || ''}
      onChange={e => {
        props.update(props.name, e.target.value);
      }}
    />
  );
});

export default Input;
