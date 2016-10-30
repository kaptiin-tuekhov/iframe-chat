/// <reference path="../typings/index.d.ts" />

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_IFRAME = 'ADD_IFRAME';

export const iframeReducer: ActionReducer<Array<string>> = (state: Array<string> = [], action: Action) => {
  switch (action.type) {
    case ADD_IFRAME:
      return [...state, action.payload];
    default:
      return state;
  }
};
