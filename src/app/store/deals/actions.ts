import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Deal } from "../../domain/searchDeals/entities/deal";
import { DealVM } from "../../domain/searchDeals/viewModels/dealVm";

export const dealActions = createActionGroup({
    source: "Deals",
    events: {
      searchDeals: emptyProps(),
      searchDealsSucceeded: props<{ deals: Deal[] }>(),
      searchDealsFailed: props<{ error: string }>(),
      updateDeals: props<{ deals: DealVM[] }>(),
    },
  });