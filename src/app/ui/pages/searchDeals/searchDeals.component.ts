import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchDealsUsecase } from '../../../domain/searchDeals/searchDeals.useCase';
import { DealCountComponent } from '../../features/deals/dealCount/dealCount.component';
import { DealVM } from '../../../domain/searchDeals/viewModels/dealVm';
import { DealListComponent } from '../../features/deals/deal-list/deal-list.component';

@Component({
  selector: 'app-search-deals',
  standalone: true,
  imports: [
    CommonModule, DealListComponent, DealCountComponent
  ],
  templateUrl: './searchDeals.component.html',
  styleUrl: './searchDeals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDealsComponent implements OnInit{
  deals$: Observable<DealVM[]>;

  constructor(private dealUseCase: SearchDealsUsecase) {
  }

  ngOnInit(): void {
    this.deals$ = this.dealUseCase.getDeals();
    this.dealUseCase.searchDeals().subscribe();
  }

  onDealsChange(deals: DealVM[]){
    this.dealUseCase.updateDeals(deals);
  }
}
