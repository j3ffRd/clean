import { Inject, Injectable } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { Deal } from "../../domain/searchDeals/entities/deal";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG, AppConfig } from "../../core/abstractions/appConfig";
import { DealDtoMapper } from "../mappers/dealDtoMapper";
import { DealDto } from "../dtos/dealDto";

@Injectable({providedIn: 'root'})
export class SearchDealsProvider {
  constructor(private httpClient: HttpClient, 
              @Inject(APP_CONFIG) private appConfig: AppConfig) {
  }

  searchDeals(): Observable<Deal[]>{
    const url = this.appConfig.baseUrl + this.appConfig.urls['searchDeals'];

    return this.httpClient.get<DealDto[]>(url).pipe(
      map(dtos => {
        const test = DealDtoMapper.convertDealDtos(dtos);
        return test;
      }),
      catchError(() => {
        throw new Error('Cannot retireve deals')
      })
    );
  }
}
