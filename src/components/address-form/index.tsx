import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Control } from 'react-hook-form/dist/types/form';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

interface IProps {
  errors: any;
  control: Control;
}

const AddressForm: FC<IProps> = ({ control, errors }) => {
  return (
    <Grid container spacing={3}>
      <Grid item container>
        <Typography variant='h5'>Address</Typography>
      </Grid>
      <Grid item md={12}>
        <Controller
          as={TextField}
          name='country'
          fullWidth
          id='standard-country'
          label='Country'
          control={control}
          helperText={errors?.country?.type}
          error={!!errors.country}
          rules={{ required: true }}
        />
      </Grid>
      <Grid item md={12}>
        <Controller
          as={TextField}
          name='city'
          fullWidth
          id='standard-city'
          label='City'
          control={control}
          helperText={errors?.city?.type}
          error={!!errors.city}
          rules={{ required: true }}
        />
      </Grid>
      <Grid item md={12}>
        <Controller
          as={TextField}
          name='street'
          fullWidth
          id='standard-street'
          label='Street'
          control={control}
          helperText={errors?.street?.type}
          error={!!errors.street}
          rules={{ required: true }}
        />
      </Grid>
      <Grid item md={12}>
        <Controller
          as={TextField}
          name='house'
          fullWidth
          id='standard-house'
          label='house'
          control={control}
          helperText={errors?.house?.type}
          error={!!errors.house}
          rules={{ required: true }}
        />
      </Grid>
    </Grid>
  );
};

export default AddressForm;
