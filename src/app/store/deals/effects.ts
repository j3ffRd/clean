import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { SearchDealsUsecase } from '../../domain/searchDeals/searchDeals.useCase';
import { dealActions } from "./actions";

@Injectable()
export class DealEffects {
  constructor(private actions$: Actions, 
              private searchDealUseCase: SearchDealsUsecase) {} 

    loadDeals$ = createEffect(() => this.actions$.pipe(
        ofType(dealActions.searchDeals),
        switchMap(() => this.searchDealUseCase.searchDeals())
    ),{ dispatch: false });


    updateDeals$ = createEffect(() => this.actions$.pipe(
        ofType(dealActions.updateDeals),
        map((action) => this.searchDealUseCase.updateDeals(action.deals))
    ),{ dispatch: false });
}
