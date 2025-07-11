import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideClientHydration} from "@angular/platform-browser";
import {provideRouter} from "@angular/router";
import {routes} from "./app.routing";

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes), provideClientHydration()]
};
