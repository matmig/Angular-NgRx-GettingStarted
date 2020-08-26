import {
  createReducer,
  on,
  createAction,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

export interface UserState {
  maskUserName: boolean;
}

const initialUserState = {
  maskUserName: false,
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  (state) => state.maskUserName
);

export const userReducer = createReducer<UserState>(
  initialUserState,
  on(createAction('[User]: mask User name'), (state) => ({
    ...state,
    maskUserName: !state.maskUserName,
  }))
);
