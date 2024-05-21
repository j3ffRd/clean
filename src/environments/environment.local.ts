import { AppConfig } from "../app/core/abstractions/appConfig";

export const environment: AppConfig= {
    baseUrl: 'http://localhost:8080',
    urls: {
        searchDeals: '/src/mocks/dtos/deals/searchDeals.json'
    }
};
