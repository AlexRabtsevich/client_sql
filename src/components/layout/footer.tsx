import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

import { getFooterStyles } from './styles';

const Footer: FC = () => {
  const classes = getFooterStyles();

  return (
    <footer className={classes.root}>
      <Grid container alignItems='center' className={classes.container} />
    </footer>
  );
};

export default Footer;
