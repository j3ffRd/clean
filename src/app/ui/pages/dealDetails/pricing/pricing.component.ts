import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PricingUseCase } from '../../../../domain/pricing/useCases/pricing.usecase';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CommonModule, FormsModule
  ],
  providers: [PricingUseCase],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
    pricingUseCase = inject(PricingUseCase); 
    pricing$ = this.pricingUseCase.getPricing();
    tag$ = this.pricingUseCase.getPricing();

    setTag(tag: string){
      this.pricingUseCase.setTag(tag);
    }

    getTags(){
      return [
        {label: "test", id: "testId"},
        {label: "test2", id: "testId2"},
      ]
    }
}
