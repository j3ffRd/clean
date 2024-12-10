import { createActionGroup, createFeature, createReducer, createSelector, on, props } from '@ngrx/store';
import { ProductInformation } from '../entities/productInformation';
import { Product } from '../entities/product';

export const productActions = createActionGroup({
  source: "Product",
  events: {
    saveProduct: props<{ product: Product }>(),
  },
});

interface ProductState {
  product: ProductInformation;
}

const initialState: ProductState = {
  product: null,
};

export const productFeature = createFeature({
  name: 'product',
  reducer: createReducer(
    initialState,
    on(productActions.saveProduct, (state, { product }) => ({
      ...state,
      product: product.information,
    })),    
  ),
  extraSelectors: ({ selectProduct }) => ({
    selectProductReference: createSelector(selectProduct, (productInformation) => productInformation.reference),
  }),
});

export const {
  name,
  reducer,
  selectProduct,
} = productFeature;