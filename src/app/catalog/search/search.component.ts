import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '@catalog/products.service';
import { CartService } from '@core/site-header/cart.service';

@Component({
  selector: 'bot-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  cart: Product[] = [];

  constructor(private productsService: ProductsService,  private cartService: CartService) { }

  ngOnInit(){
    this.productsService.getProducts().subscribe((products) => this.products = products);
  
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }

  filter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  getFilteredProducts() {
    return this.searchTerm === ''
      ? this.products
      : this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(this.searchTerm)
      );
  }
}
// to use async pipe simply expose the observable as a property then in the template add the async ()html file