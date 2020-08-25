import {
  createReducer,
  on,
  createAction,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number;
  products: Product[];
}

export interface State extends AppState.State {
  products: ProductState;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  (state) => state.showProductCode
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  (state) => state.currentProductId
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, id) => state.products.find((p) => p.id === id)
);

export const getProducts = createSelector(
  getProductFeatureState,
  (state) => state.products
);

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction('[Product] toggle Product Code'), (state: ProductState) => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);
