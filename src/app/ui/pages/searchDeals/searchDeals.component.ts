import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DealCountComponent } from '../../features/deals/dealCount/dealCount.component';
import { DealVM } from '../../../viewModels/dealVm';
import { DealListComponent } from '../../features/deals/deal-list/deal-list.component';
import { DealStoreFacade } from '../../../store/deals/facade';

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

  constructor(private dealStoreFacade: DealStoreFacade) {
  }

  ngOnInit(): void {
    this.deals$ = this.dealStoreFacade.getDeals$();
    this.dealStoreFacade.loadDeals();
  }

  onDealsChange(deals: DealVM[]){
    this.dealStoreFacade.updateDeals(deals);
  }
}
