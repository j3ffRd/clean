import { createActionGroup, createFeature, createReducer, createSelector, on, props } from '@ngrx/store';
import { Booking } from '../entities/booking';
import { productActions } from '../../product/store/state';
import { pricingActions } from '../../pricing/store/state';

export const bookingActions = createActionGroup({
  source: "Booking",
  events: {
    saveBooking: props<{ booking: Booking }>()
  },
});

interface BookingState {
  booking: Booking;
  tag: string
}

const initialState: BookingState = {
  booking: null,
  tag: null
};

export const bookingFeature = createFeature({
  name: 'booking',
  reducer: createReducer(
    initialState,
    on(bookingActions.saveBooking, (state, { booking }) => ({
      ...state,
      booking: booking,
    })),    
    on(productActions.saveProduct, (state, { product }) => ({
      ...state,
      booking: product.booking,
    })),    
    on(pricingActions.setPricingTag, (state, { tag }) => ({
      ...state,
      tag: tag,
    })),    
  ),
  extraSelectors: ({ selectBooking }) => ({
    selectBookingStatus: createSelector(selectBooking, (booking) => booking.status),
  }),
});

export const {
  name,
  reducer,
  selectTag,
  selectBooking
} = bookingFeature;