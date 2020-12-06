import React, { FC, Suspense, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Layout from './components/layout';
import { routesWithComponent } from './constants/routes';
import SuspenseStyled from './components/suspense';
import { getClient, useClientContext, WithClientStore } from './stores/client-store';
import PrivateRoute from './utils/private-route';

const App: FC = () => {
  const { dispatch } = useClientContext();

  useEffect(() => {
    dispatch(getClient());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<SuspenseStyled />}>
          <Switch>
            {routesWithComponent.map((router) => (
              <PrivateRoute
                path={router.path}
                component={router.component}
                exact
                isPrivate={router.isPrivate}
              />
            ))}
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default WithClientStore(App);
