import { Product } from "@shared/product.model";

import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { engineers } from "./squad-catalog/engineers";
import { IProductsService } from "@shared/product-service.interface";

@Injectable({providedIn: 'root'})// lets angular know we want this to be used as a service for dependecy injection 
export class EngineersService implements IProductsService {

    getProducts():Observable<Product[]> {
        return of(engineers);
        //return this.httpClient.get<Product[]>('/api/products'); // by using httpClient we dont have to do the fetch and return we can do it like so
    }

}