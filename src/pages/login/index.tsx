import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import { Grid, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import RightBottomButton from '../../components/common/right-button';
import { ILogin } from '../../types';
import { ClientApi } from '../../http-client';
import LoginTextField from '../../components/common/login-text-field';
import { getSignUpStyles } from '../sign-up/styles';
import AccountService from '../../utils/account-service';
import { getClient, useClientContext } from '../../stores/client-store';
import { Routes } from '../../constants';

const LoginPage: FC = () => {
  const { control, errors, handleSubmit, setError } = useForm();
  const clientApi = new ClientApi();
  const { dispatch } = useClientContext();
  const history = useHistory();
  const classes = getSignUpStyles();

  const onSubmit = async (data: ILogin) => {
    const client = await clientApi.getClient(data.login, data.password);

    if (client) {
      const accountService = new AccountService();
      accountService.setClient(client);
      dispatch(getClient());
      history.push(Routes.Rooms);
    } else {
      setError('login', { type: 'Login is not correct' });
      setError('password', { type: 'Password is not correct' });
    }
  };

  return (
    <Card className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid xs={12} md={12}>
            <Typography variant='h4'>Login</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <LoginTextField errors={errors} control={control} />
          </Grid>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={12} container justify='flex-end' className={classes.button}>
            <RightBottomButton type='submit'>Sign In</RightBottomButton>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default LoginPage;
