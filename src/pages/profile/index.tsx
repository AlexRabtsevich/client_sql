import React, { FC, useCallback } from 'react';
import Card from '@material-ui/core/Card';
import { Button, Grid, Typography } from '@material-ui/core';

import { logOutClient, useClientContext } from '../../stores/client-store';
import { getProfileStyles } from './styles';

const ProfilePage: FC = () => {
  const classes = getProfileStyles();

  const { state, dispatch } = useClientContext();

  const onLogOut = useCallback(() => {
    dispatch(logOutClient());
  }, [dispatch]);

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item md={8} xs={8}>
          <Typography variant='h4'>Profile</Typography>
        </Grid>
        <Grid container item md={4} xs={4} justify='flex-end'>
          <Button color='secondary' variant='contained' onClick={onLogOut}>
            Log Out
          </Button>
        </Grid>
        <Grid container md={12} xs={12} className={classes.info}>
          <Grid item md={5} xs={6}>
            <Typography className={classes.title}>First Name</Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant='subtitle1'>{state.profile?.firstName}</Typography>
          </Grid>
          <Grid item md={5} xs={6}>
            <Typography className={classes.title}>Last Name</Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant='subtitle2'>{state.profile?.lastName}</Typography>
          </Grid>
          <Grid item md={5} xs={6}>
            <Typography className={classes.title}>Age</Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant='subtitle1'>{state.profile?.age}</Typography>
          </Grid>
          <Grid item md={5} xs={6}>
            <Typography className={classes.title}>Phone</Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant='subtitle1'>{state.profile?.phone}</Typography>
          </Grid>
          <Grid item md={5} xs={6}>
            <Typography className={classes.title}>Country</Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant='subtitle1'>{state.address?.country}</Typography>
          </Grid>
          <Grid item md={5} xs={6}>
            <Typography className={classes.title}>City</Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant='subtitle1'>{state.address?.city}</Typography>
          </Grid>
          <Grid item md={5} xs={6}>
            <Typography className={classes.title}>Street</Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant='subtitle1'>{state.address?.street}</Typography>
          </Grid>
          <Grid item md={5} xs={6}>
            <Typography className={classes.title}>House</Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <Typography variant='subtitle1'>{state.address?.house}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfilePage;
