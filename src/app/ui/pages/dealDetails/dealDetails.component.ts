import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { OrderListModule } from 'primeng/orderlist';
import { ProductUseCase } from '../../../domain/product/useCases/product.usecase';
import { PricingComponent } from './pricing/pricing.component';
import { BookingComponent } from './booking/booking.component';

@Component({
  selector: 'app-search-deals',
  standalone: true,
  imports: [
    CommonModule, NgSelectModule, BookingComponent,
    FormsModule, NgOptionHighlightModule, OrderListModule, PricingComponent
  ],
  providers: [ProductUseCase],
  templateUrl: './dealDetails.component.html',
  styleUrl: './dealDetails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealDetailsComponent {
   // productReference = input<string>();

    product$ = this.productUseCase.getProduct();

    constructor(private productUseCase: ProductUseCase) {
        //effect(() => productUseCase.loadProduct(this.productReference()));
        productUseCase.loadProduct("123");
    }  
}
