import React, { FC } from 'react';

import { getHeaderStyles } from './styles';
import NavigationMenu from '../navigation-menu';

const Header: FC = () => {
  const classes = getHeaderStyles();

  return (
    <header className={classes.header}>
      <NavigationMenu />
    </header>
  );
};

export default Header;
