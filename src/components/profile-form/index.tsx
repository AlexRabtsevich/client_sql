import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Control } from 'react-hook-form/dist/types/form';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

interface IProps {
  errors: any;
  control: Control;
}

const ProfileForm: FC<IProps> = ({ control, errors }) => {
  return (
    <Grid container spacing={3}>
      <Grid item container>
        <Typography variant='h5'>Profile</Typography>
      </Grid>
      <Grid item md={12}>
        <Controller
          as={TextField}
          name='firstName'
          fullWidth
          id='standard-firstName'
          label='First name'
          control={control}
          helperText={errors?.firstName?.type}
          error={!!errors.firstName}
          rules={{ required: true }}
        />
      </Grid>
      <Grid item md={12}>
        <Controller
          as={TextField}
          name='lastName'
          fullWidth
          id='standard-lastName'
          label='Last Name'
          control={control}
          helperText={errors?.lastName?.type}
          error={!!errors.lastName}
          rules={{ required: true }}
        />
      </Grid>
      <Grid item md={12}>
        <Controller
          as={TextField}
          name='age'
          fullWidth
          id='standard-age'
          label='Age'
          control={control}
          helperText={errors?.age?.type}
          error={!!errors.age}
          rules={{ required: true }}
          type='number'
        />
      </Grid>
      <Grid item md={12}>
        <Controller
          as={TextField}
          name='phone'
          fullWidth
          id='standard-phone'
          label='Phone'
          control={control}
          helperText={errors?.phone?.type}
          error={!!errors.phone}
          rules={{ required: true }}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileForm;
