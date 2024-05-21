import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchDealsUsecase } from '../../../../domain/searchDeals/searchDeals.useCase';

@Component({
  selector: 'app-deal-count',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dealCount.component.html',
  styleUrl: './dealCount.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealCountComponent {
    private useCase = inject(SearchDealsUsecase); 

    dealCount$ = this.useCase.getDealCount();
}
