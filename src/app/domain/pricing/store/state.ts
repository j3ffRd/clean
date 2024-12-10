import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { createActionGroup, props } from "@ngrx/store";
import { Pricing } from "../entities/pricing";
import { productActions } from '../../product/store/state';

export const pricingActions = createActionGroup({
    source: "Pricing",
    events: {
      savePricing: props<{ pricing: Pricing }>(),
      setPricingTag: props<{ tag: string }>(),
    },
});

interface PricingState {
  pricing: Pricing;
  tag: string;
}

const initialState: PricingState = {
  pricing: null,
  tag: null
};

export const pricingFeature = createFeature({
  name: 'pricing',
  reducer: createReducer(
    initialState,
    on(pricingActions.savePricing, (state, { pricing }) => ({
      ...state,
      pricing: pricing,
    })),    
    on(productActions.saveProduct, (state, { product }) => ({
      ...state,
      pricing: product.pricing,
    })),   
    on(pricingActions.setPricingTag, (state, { tag }) => ({
      ...state,
      tag: tag,
    })),   
  ),
  extraSelectors: ({ selectPricing }) => ({
    selectIsPricing: createSelector(selectPricing, (pricing) => pricing.elements.length > 0),
  }),
});

export const {
  name,
  reducer,
  selectPricing,
  selectTag
} = pricingFeature;