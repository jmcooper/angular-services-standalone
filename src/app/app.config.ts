import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CART_OPTIONS_TOKEN } from '@catalog/cart.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), {
    provide: CART_OPTIONS_TOKEN,
    useValue: { persistenceType: 'none', persistenceKey: 'cart' },
  }]
};
