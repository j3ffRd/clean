import { Observable } from 'rxjs';
import { SearchDealsProvider } from '../../../infrastructure/deals/providers/getProducts.provider';
import { DealStoreFacade } from '../store/facade';
import { Injectable } from '@angular/core';
import { DealVM } from '../viewModels/dealVm';

@Injectable({providedIn: 'root'})
export class SearchDealsUsecase {
    constructor(private getOrdersProvider: SearchDealsProvider, 
                private store: DealStoreFacade) {        
    }

    searchDeals(): void {
        this.getOrdersProvider.searchDeals().subscribe({
            next: (deals) => this.store.saveDeals(deals),
            error: () => {}
        });
    }

    getDeals(): Observable<DealVM[]> {
        return this.store.getDeals$();
    }

    updateDeals(deals: DealVM[]) {
        this.store.updateDeals(deals);
    }
}