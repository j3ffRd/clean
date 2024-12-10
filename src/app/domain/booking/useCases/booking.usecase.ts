import { Observable } from "rxjs";
import { BookingStoreFacade } from "../store/facade";
import { Booking } from "../entities/booking";
import { Injectable } from "@angular/core";

@Injectable()
export class BookingUseCase {

    getBooking(): Observable<Booking>{
        return this.store.booking$;
    }

    getPricingTag(): Observable<string> {
        return this.store.tag$;
    }

    constructor(private store: BookingStoreFacade) {
    }
}