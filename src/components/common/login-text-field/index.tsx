import React, { FC } from 'react';
import { Control } from 'react-hook-form/dist/types/form';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';

interface IProps {
  errors: any;
  control: Control;
}

const LoginTextField: FC<IProps> = ({ errors, control }) => {
  return (
    <Controller
      as={TextField}
      name='login'
      fullWidth
      id='standard-login'
      label='Login'
      control={control}
      helperText={errors?.login?.type}
      error={!!errors.login}
      rules={{ required: true }}
    />
  );
};

export default LoginTextField;
