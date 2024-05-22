import { Routes } from '@angular/router';
import { SearchDealsComponent } from './ui/pages/searchDeals/searchDeals.component';
import { provideEffects } from '@ngrx/effects';
import { DealEffects } from './store/deals/effects';

export const routes: Routes = [
    { path: 'deals', component: SearchDealsComponent, providers: [provideEffects(DealEffects)]},
];
