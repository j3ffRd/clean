import { Deal } from "../../domain/searchDeals/entities/deal";
import { DealDto } from "../dtos/dealDto";

export class DealDtoMapper {
    static convertDealDtos(dealDtos: DealDto[]): Deal[] {
       return dealDtos!= null ? dealDtos.map(this.convertDealDto) : [];
    }

    static convertDealDto(dealDto: DealDto): Deal {
        const deal =  new Deal();
        deal.id = dealDto.id;
        deal.productName = dealDto.productName;
        deal.underlying = dealDto.underlying;
        deal.client = dealDto.client;
        return deal;
    }
}
