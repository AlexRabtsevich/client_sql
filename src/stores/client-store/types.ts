import { Dispatch } from 'react';
import * as actionTypes from './action-types';
import { IAddress, IClient, IProfile } from '../../types';
import { AsyncAction } from '../../utils/with-async-dispatch';

export interface IUpdateClient {
  type: typeof actionTypes.UPDATE_CLIENT;
  payload: IClient;
}

export interface ILogOutClient {
  type: typeof actionTypes.LOG_OUT_CLIENT;
}

export interface IClientStore {
  profile: IProfile | null;
  address: IAddress | null;
  login: string | null;
  isAuthorized: boolean;
}

export interface IClientContext {
  state: IClientStore;
  dispatch: Dispatch<Action | AsyncAction<Action>>;
}

export type Action = IUpdateClient | ILogOutClient;
