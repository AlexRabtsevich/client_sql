import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import { useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import AddressForm from '../../components/address-form';
import { getSignUpStyles } from './styles';
import ProfileForm from '../../components/profile-form';
import PasswordForm from '../../components/password-form';
import RightBottomButton from '../../components/common/right-button';
import { ClientApi } from '../../http-client';
import { IClientFormData, ICreateClientData } from '../../types';
import { Routes } from '../../constants';

const SignUpPage: FC = () => {
  const { control, errors, watch, handleSubmit } = useForm();
  const clientApi = new ClientApi();
  const classes = getSignUpStyles();
  const history = useHistory();

  const onSubmit = async (data: IClientFormData) => {
    const client: ICreateClientData = {
      address: {
        country: data.country,
        city: data.city,
        street: data.street,
        house: data.house,
      },
      profile: {
        lastName: data.lastName,
        firstName: data.firstName,
        age: data.age,
        phone: data.phone,
      },
      login: data.login,
      password: data.password,
    };

    await clientApi.createClient(client);
    history.push(Routes.Login);
  };

  return (
    <Card className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <AddressForm control={control} errors={errors} />
          </Grid>
          <Grid item md={6} xs={12}>
            <ProfileForm errors={errors} control={control} />
          </Grid>
          <Grid item md={12} xs={12}>
            <PasswordForm errors={errors} control={control} watch={watch} />
          </Grid>
          <Grid item xs={12} md={12} container justify='flex-end' className={classes.button}>
            <RightBottomButton type='submit'>Create</RightBottomButton>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default SignUpPage;
