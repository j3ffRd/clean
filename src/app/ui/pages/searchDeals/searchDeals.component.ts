import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DealVM } from '../../../domain/searchDeals/viewModels/dealVm';
import { DealListComponent } from './deal-list/deal-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { OrderListModule } from 'primeng/orderlist';
import { SearchDealsUsecase } from '../../../domain/searchDeals/useCases/searchDeals.useCase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-deals',
  standalone: true,
  imports: [
    CommonModule, DealListComponent, NgSelectModule, 
    FormsModule, NgOptionHighlightModule, OrderListModule
  ],
  templateUrl: './searchDeals.component.html',
  styleUrl: './searchDeals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDealsComponent implements OnInit{

    deals$: Observable<DealVM[]>;

    constructor(private searchDealsUseCase: SearchDealsUsecase)     {
    }

    ngOnInit(): void {
      this.deals$ = this.searchDealsUseCase.getDeals();
      this.searchDealsUseCase.searchDeals();
    }

    onDealsChange(deals: DealVM[]){
      this.searchDealsUseCase.updateDeals(deals);
    }
  
    cities = [
      {
          id: 1,
          name: 'Vilnius',
          avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
      },
      { id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
      {
          id: 3,
          name: 'Pavilnys',
          avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
      },
      {
          id: 4,
          name: 'Siauliai',
          avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
      },
    ];

    selectedCities = [this.cities[1].name];

    changeItem(event: boolean, item: string) {
      if(event){
        this.selectedCities.push(item);
      }
      else {
        this.selectedCities = this.selectedCities.filter(x => x != item);
      }
    }

    reorder(event: any) {
      console.log(event);
    }
}
