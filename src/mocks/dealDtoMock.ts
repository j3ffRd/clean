import { Deal } from "../app/domain/searchDeals/entities/deal";
import * as dealJson from './dtos/deals/searchDeals.json';
import { PartialDeep } from "./helper";


export class DealDtoMock {
    getDeals(deal: PartialDeep<Deal>): Deal {
        return Object.assign(new Deal(), dealJson, deal);
    }
}
