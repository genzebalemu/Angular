import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { provideRouter, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),  
    RouterModule]
};
