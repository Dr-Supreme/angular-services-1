import { Product } from "@shared/product.model";

import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})// lets angular know we want this to be used as a service for dependecy injection 
export class ProductsService {
    constructor(private httpClient: HttpClient) { }

    getProducts():Observable<Product[]> {
        return this.httpClient.get<Product[]>('/api/products'); // by using httpClient we dont have to do the fetch and return we can do it like so
    }

}

// an angular service is at its heart just a class -oversimpliofied definition

// to create a servie we create a class and mark it as injectable then inject your service into where you want it.