import React, { FC } from 'react';
import { Container, Grid, CircularProgress } from '@material-ui/core';

import { getSuspenseStyles } from './styles';

const SuspenseStyled: FC = () => {
  const styles = getSuspenseStyles();

  return (
    <Container className={styles.root}>
      <Grid>
        <CircularProgress />
      </Grid>
    </Container>
  );
};

export default SuspenseStyled;