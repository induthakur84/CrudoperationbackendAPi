

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [

    
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),


    //it enable http communication so angular can call backend apis
    //Examples calling the getusera pi


    provideHttpClient(),

  ]
};
