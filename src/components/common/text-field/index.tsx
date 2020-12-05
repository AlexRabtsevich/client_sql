import React from 'react';

import { styled, TextFieldProps } from '@material-ui/core';
import MaterialTextField from '@material-ui/core/TextField';

const TextField = styled((props: TextFieldProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MaterialTextField {...props} variant='filled' color='primary' rows={3} />
));

export default TextField;
