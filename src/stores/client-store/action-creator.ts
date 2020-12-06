import { Dispatch } from 'react';
import { IClient } from '../../types';
import { Action, ILogOutClient, IUpdateClient } from './types';
import * as actionTypes from './action-types';
import AccountService from '../../utils/account-service';

const updateClient = (client: IClient): IUpdateClient => {
  return { type: actionTypes.UPDATE_CLIENT, payload: client };
};

const logOut = (): ILogOutClient => {
  return { type: actionTypes.LOG_OUT_CLIENT };
};

export const logOutClient = () => (dispatch: Dispatch<Action>): void => {
  const accountService = new AccountService();
  accountService.logOutClient();

  dispatch(logOut());
};

export const getClient = () => async (dispatch: Dispatch<Action>): Promise<void> => {
  const accountService = new AccountService();
  const client = accountService.getClient();

  if (client) {
    dispatch(updateClient(client));
  }
};
