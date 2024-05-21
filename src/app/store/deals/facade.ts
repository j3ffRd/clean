import { Observable, map } from "rxjs";
import { Deal } from "../../domain/searchDeals/entities/deal";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { dealActions } from "./actions";
import { DealCountVM } from "../../domain/searchDeals/viewModels/dealCountVm";
import { DealVM } from "../../domain/searchDeals/viewModels/dealVm";
import { selectDealCount, selectDeals } from "./state";

@Injectable({ providedIn: 'root' })
export class DealStoreFacade {
    deals$ : Observable<Deal[]> = this.store.select(selectDeals);

    constructor(private store: Store<Deal>) {
    }

    saveDeals(deals: Deal[]) {
        this.store.dispatch(dealActions.searchDealsSucceeded({deals}));
    }  
    
    getDeals(): Observable<DealVM[]> {
        return this.store.select(selectDeals).pipe(
            map(deals => {
                return deals.map(deal => ({
                    id: Number(deal.id), 
                    productName: deal.productName, 
                    underlying: deal.underlying.name, 
                    client: deal.client.name}))
            }));
    }

    updateDeals(deals: DealVM[]) {
        this.store.dispatch(dealActions.updateDeals({deals}));
    }

    getDealCount(): Observable<DealCountVM> {
        return this.store.select(selectDealCount).pipe(map(count => ({count})));
    }
}