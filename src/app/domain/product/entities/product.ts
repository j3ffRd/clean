import { Booking } from "../../booking/entities/booking";
import { Pricing } from "../../pricing/entities/pricing";
import { ProductInformation } from "./productInformation";

export interface Product {
    information: ProductInformation;
    pricing: Pricing;
    booking: Booking;
}
