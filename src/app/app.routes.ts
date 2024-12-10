import { Routes } from '@angular/router';
import { SearchDealsComponent } from './ui/pages/searchDeals/searchDeals.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer as bookingReducer} from './domain/booking/store/state';
import { reducer as PricingReducer } from './domain/pricing/store/state';
import { reducer as ProductReducer } from './domain/product/store/state';
import { DealDetailsComponent } from './ui/pages/dealDetails/dealDetails.component';

export const routes: Routes = [
    { path: '', redirectTo: '/deal', pathMatch: 'full' },
    { path: 'deals', component: SearchDealsComponent, 
        providers: [
        ]
    },
    { path: 'deal', component: DealDetailsComponent, 
        providers: [
            importProvidersFrom(StoreModule.forFeature('booking', bookingReducer)),
            importProvidersFrom(StoreModule.forFeature('pricing', PricingReducer)),
            importProvidersFrom(StoreModule.forFeature('product', ProductReducer)),
        ]
    },
];
