import produce, { Draft } from 'immer';
import { WritableDraft } from 'immer/dist/types/types-external';
import { Action, IClientStore } from './types';

import * as actionTypes from './action-types';
// eslint-disable-next-line import/no-cycle
import { initialState } from './with-client-store';

/* eslint-disable no-param-reassign */

const reducer = produce((draft: Draft<IClientStore>, action: WritableDraft<Action>) => {
  switch (action.type) {
    case actionTypes.UPDATE_CLIENT: {
      draft.isAuthorized = true;
      draft.id = action.payload.id;
      draft.address = action.payload.address;
      draft.profile = action.payload.profile;
      draft.login = action.payload.login;
      break;
    }
    case actionTypes.LOG_OUT_CLIENT: {
      draft.isAuthorized = false;
      draft.address = initialState.address;
      draft.profile = initialState.profile;
      draft.login = initialState.login;
      draft.id = initialState.id;
      break;
    }
    default: {
      break;
    }
  }
});

export default reducer;
