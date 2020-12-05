import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { styled } from '@material-ui/core';

// eslint-disable-next-line react/jsx-props-no-spreading
const RightBottomButton = styled((props: ButtonProps) => <Button {...props} />)({
  borderRadius: '0 0 1.5625rem 0',
  fontSize: '1.125rem',
  lineHeight: '1.125rem',
  fontWeight: 'bold',
  textTransform: 'none',
  padding: '1rem 1.25rem',
  boxShadow: 'none',
  background: '#2196f3',
  color: 'white',

  '&:hover': {
    background: '#2196f3',
    opacity: '0.8',
  },
});

export default RightBottomButton;
