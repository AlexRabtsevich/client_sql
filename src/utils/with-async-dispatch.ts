import { Dispatch } from 'react';

export type AsyncAction<T> = (dispatch: Dispatch<T>) => void;

export const withAsync = <T>(dispatch: Dispatch<T>): Dispatch<T | AsyncAction<T>> => {
  return (action: T | AsyncAction<T>) => {
    if (action instanceof Function) {
      return action(dispatch);
    }

    return dispatch(action);
  };
};
