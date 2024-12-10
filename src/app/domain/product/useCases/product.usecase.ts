import { catchError, Observable, of, switchMap } from "rxjs";
import { SearchDealsProvider } from "../../../infrastructure/deals/providers/getProducts.provider";
import { ProductStoreFacade } from "../store/facade";
import { ProductInformation } from "../entities/productInformation";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductUseCase {

    loadProduct(reference: string): void {
        this.productProvider.getProduct(reference).pipe(
            switchMap(product => {
                this.store.saveProduct(product);
                return this.store.product$;
            }),
            catchError(() => of(null))
        ).subscribe();
    }

    getProduct(): Observable<ProductInformation>{
        return this.store.product$;
    }

    constructor(private productProvider: SearchDealsProvider,
                private store: ProductStoreFacade) {
    }
}

