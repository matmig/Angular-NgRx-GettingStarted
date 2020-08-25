import { createReducer, createAction } from '@ngrx/store';

import { on } from '@ngrx/store';

export const productReducer = createReducer(
  { showProductCode: true },
  on(createAction('[Product] toggle Product Code'), (state) => {
    console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);
