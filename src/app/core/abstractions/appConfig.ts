import { InjectionToken } from "@angular/core";

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
    baseUrl: string;
    urls: {[key: string]: string};
}
