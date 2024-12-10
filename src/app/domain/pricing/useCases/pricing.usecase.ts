import { Observable } from "rxjs";
import { PricingStoreFacade } from "../store/facade";
import { Pricing } from "../entities/pricing";
import { Injectable } from "@angular/core";

@Injectable()
export class PricingUseCase {

    getPricing(): Observable<Pricing>{
        return this.store.pricing$;
    }

    getTag(): Observable<string> {
        return this.store.getTag();
    }

    setTag(tag: string): void {
        this.store.setTag(tag);
    }

    constructor(private store: PricingStoreFacade) {
    }
}