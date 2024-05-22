import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Deal } from '../../domain/searchDeals/entities/deal';
import { dealActions } from '../deals/actions';

interface State {
  deals: Deal[];
  loading: boolean;
}

const initialState: State = {
  deals: [],
  loading: false,
};

export const dealsFeature = createFeature({
  name: 'deals',
  reducer: createReducer(
    initialState,
    on(dealActions.searchDeals, (state) => ({
      ...state,
      loading: true,
    })),
    on(dealActions.searchDealsSucceeded, (state, { deals }) => ({
      ...state,
      deals,
      loading: false,
    })),
    on(dealActions.updateDealsSucceeded, (state, { deals }) => ({
      ...state,
      deals: state.deals.filter(x => !deals.some(y => y.id != Number(x.id))),
      loading: false,
    })),
  ),
  extraSelectors: ({ selectDeals }) => ({
    selectHasDeals: createSelector(selectDeals, (deals) => deals.length > 0),
    selectDealCount: createSelector(selectDeals, (deals) => deals.length)
  }),
});

export const {
  name,
  reducer,
  selectDealsState,
  selectDeals,
  selectLoading,
  selectDealCount
} = dealsFeature;