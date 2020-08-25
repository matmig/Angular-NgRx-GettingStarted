import { createReducer, on, createAction } from '@ngrx/store';

export const userReducer = createReducer(
  {
    maskUserName: false,
  },
  on(createAction('[User]: mask User name'), (state) => ({
    ...state,
    maskUserName: !state.maskUserName,
  }))
);
