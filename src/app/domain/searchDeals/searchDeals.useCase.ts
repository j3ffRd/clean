import { Observable, catchError, switchMap, tap } from 'rxjs';
import { SearchDealsProvider } from '../../infrastructure/providers/getDeals.provider';
import { DealStoreFacade } from '../../store/deals/facade';
import { Injectable } from '@angular/core';
import { DealCountVM } from './viewModels/dealCountVm';
import { DealVM } from './viewModels/dealVm';
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

    getDeals(): Observable<DealVM[]> {
        return this.store.getDeals();
    }

    updateDeals(deals: DealVM[]): void {
        this.store.updateDeals(deals);
    }

    getDealCount(): Observable<DealCountVM> {
        return this.store.getDealCount().pipe(tap(x => console.log('count', x)));
    } 
}