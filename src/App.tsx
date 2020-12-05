import React, { FC, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Layout from './components/layout';
import { routesWithComponent } from './constants/routes';
import SuspenseStyled from './components/suspense';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<SuspenseStyled />}>
          <Switch>
            {routesWithComponent.map((router) => (
              <Route path={router.path} key={uuid()} component={router.component} exact />
            ))}
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
