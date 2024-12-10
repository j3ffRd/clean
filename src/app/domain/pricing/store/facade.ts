import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { pricingActions, selectTag } from "./state";
import { selectPricing } from "./state";
import { Pricing } from "../entities/pricing";

@Injectable({ providedIn: 'root' })
export class PricingStoreFacade {
    pricing$ : Observable<Pricing> = this.store.select(selectPricing);

    constructor(private store: Store<Pricing>) {
    }

    savePricing(pricing: Pricing): void {
        this.store.dispatch(pricingActions.savePricing({pricing}));
    }

    setTag(tag: string): void{
        this.store.dispatch(pricingActions.setPricingTag({tag}));
    }

    getTag(): Observable<string> {
        return this.store.select(selectTag);
    }
}