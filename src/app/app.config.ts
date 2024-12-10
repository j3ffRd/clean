import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { APP_CONFIG } from './core/abstractions/appConfig';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore(), 
    provideHttpClient(),
    importProvidersFrom(StoreModule.forRoot({})),
    {provide: APP_CONFIG, useValue: environment}
  ]
};
