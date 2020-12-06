import React, { ComponentType, createContext, useContext, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';
// eslint-disable-next-line import/no-cycle
import reducer from './reducer';

import { withAsync } from '../../utils/with-async-dispatch';
import { IClientContext, IClientStore } from './types';

export const initialState: IClientStore = {
  isAuthorized: false,
  address: null,
  profile: null,
  login: null,
};

export const ClientContext = createContext<IClientContext>({
  state: initialState,
  dispatch: () => null, // TODO: initial dispatch
});

/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line @typescript-eslint/ban-types
export const WithClientStore = <T extends {}>(Component: ComponentType<T>): ComponentType<T> => {
  return (props) => {
    const [state, dispatch] = useImmerReducer(reducer, initialState);

    const asyncDispatch = useMemo(() => withAsync(dispatch), [dispatch]);

    return (
      <ClientContext.Provider value={{ state, dispatch: asyncDispatch }}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} />
      </ClientContext.Provider>
    );
  };
};

export const useClientContext = (): IClientContext => useContext(ClientContext);
