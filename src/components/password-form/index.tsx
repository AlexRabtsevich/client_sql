import React, { FC } from 'react';
import { Control } from 'react-hook-form/dist/types/form';
import { Grid, Typography } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

import LoginTextField from '../common/login-text-field';

interface IProps {
  errors: any;
  watch: any;
  control: Control;
}

const PasswordForm: FC<IProps> = ({ errors, control, watch }) => {
  return (
    <Grid container spacing={3}>
      <Grid item container>
        <Typography variant='h5'>Authentication</Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <LoginTextField errors={errors} control={control} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Controller
          as={TextField}
          name='password'
          fullWidth
          id='standard-password'
          label='Password'
          control={control}
          helperText={errors?.password?.type}
          error={!!errors.password}
          rules={{ required: true }}
          type='password'
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <Controller
          as={TextField}
          name='confirmPassword'
          fullWidth
          id='standard-confirm-password'
          label='Confirm password'
          control={control}
          helperText={errors?.confirmPassword?.type}
          error={!!errors.confirmPassword}
          rules={{
            required: true,
            validate: {
              equals: (value: string) =>
                (watch && value === watch('password')) || 'Password should be equals',
            },
          }}
          type='password'
        />
      </Grid>
    </Grid>
  );
};

export default PasswordForm;
