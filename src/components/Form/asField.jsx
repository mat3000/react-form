import React from 'react';
import Field from './Field';

const asField = Comp => {
  const AsField = props => <Field component={Comp} {...props} />;
  return AsField;
};

export default asField;
