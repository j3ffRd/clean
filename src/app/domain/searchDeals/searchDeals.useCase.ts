import { Observable, catchError, switchMap } from 'rxjs';
import { SearchDealsProvider } from '../../infrastructure/providers/getDeals.provider';
import { DealStoreFacade } from '../../store/deals/facade';
import { Injectable } from '@angular/core';
import { DealVM } from '../../viewModels/dealVm';
import { Deal } from './entities/deal';

@Injectable({providedIn: 'root'})
export class SearchDealsUsecase {
    constructor(private getOrdersProvider: SearchDealsProvider, 
                private store: DealStoreFacade) {        
    }

    searchDeals(): Observable<Deal[]> {
        return this.getOrdersProvider.searchDeals().pipe(
            switchMap(deals => {
                this.store.saveDeals(deals);
                return this.store.deals$;
            }),
            catchError(() => [])
        );
    }

    updateDeals(deals: DealVM[]) {
        this.store.updateDealsSucceed(deals);
    }
}