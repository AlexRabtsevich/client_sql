import React, { FC } from 'react';
import ContainerMaterial from '@material-ui/core/Container';

import { getLayoutStyles } from './styles';
import Footer from './footer';
import Header from './header';

const Layout: FC = (props) => {
  const { children } = props;
  const classes = getLayoutStyles();

  return (
    <div className={classes.root}>
      <Header />
      <main>
        <ContainerMaterial>
          <>{children}</>
        </ContainerMaterial>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
