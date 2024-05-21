import { AppConfig } from "../app/core/abstractions/appConfig";

export const environment: AppConfig = {
    baseUrl: 'http://myserver:8000',
    urls: {
        searchDeals: '/api/deals'
    }
};
