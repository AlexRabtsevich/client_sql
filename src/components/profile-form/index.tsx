import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Control } from 'react-hook-form/dist/types/form';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { IProfile } from '../../types';

interface IProps {
  errors: any;
  control: Control;
  profile?: IProfile;
}

const ProfileForm: FC<IProps> = ({ control, errors, profile }) => {
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
          defaultValue={profile?.firstName}
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
          defaultValue={profile?.lastName}
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
          defaultValue={profile?.age}
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
          defaultValue={profile?.phone}
          helperText={errors?.phone?.type}
          error={!!errors.phone}
          rules={{ required: true }}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileForm;
