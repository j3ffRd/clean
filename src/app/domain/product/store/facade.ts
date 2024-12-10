import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { productActions } from "./state";
import { selectProduct } from "./state";
import { Product } from "../entities/product";
import { ProductInformation } from "../entities/productInformation";

@Injectable({ providedIn: 'root' })
export class ProductStoreFacade {
    product$ : Observable<ProductInformation> = this.store.select(selectProduct);

    saveProduct(product: Product): void {
        this.store.dispatch(productActions.saveProduct({product}));
    }
    
    constructor(private store: Store<Product>) {
    }
}