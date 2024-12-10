import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectBooking, selectTag } from "./state";
import { Booking } from "../entities/booking";

@Injectable({ providedIn: 'root' })
export class BookingStoreFacade {
    booking$ : Observable<Booking> = this.store.select(selectBooking);
    tag$: Observable<string> = this.store.select(selectTag);

    constructor(private store: Store<Booking>) {
    }   
}