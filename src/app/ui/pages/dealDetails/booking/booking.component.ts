import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingUseCase } from '../../../../domain/booking/useCases/booking.usecase';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule, FormsModule
  ],
  providers: [BookingUseCase],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingComponent {
    bookingUseCase = inject(BookingUseCase);    
    booking$ = this.bookingUseCase.getBooking();
    tag = toSignal(this.bookingUseCase.getPricingTag()); 
}
