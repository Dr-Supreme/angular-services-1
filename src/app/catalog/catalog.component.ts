import { Component, Inject, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import {  CartService } from '@core/site-header/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent  {
  products: Observable<Product[]> = this.productsService.getProducts();

  constructor(
    private productsService: ProductsService, 
    private cartService: CartService ) { // short hand version of declaring a private class field, thanks to typescript
      // declaring a constructor parameter like so creates a class member with the proprty name so that we can access the pordcutsService with this.productsService
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
// to use async pipe simply expose the observable as a property then in the template add the async ()html file