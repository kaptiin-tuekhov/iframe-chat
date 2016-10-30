

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const chatLogReducer: ActionReducer<Array<Object>> = (state: Array<Object> = [], action: Action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};
