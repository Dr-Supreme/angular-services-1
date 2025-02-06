import { Component, Inject, Self, SkipSelf } from '@angular/core';
import { Product } from '@shared/product.model';
import { engineers } from './engineers';
import { CartService } from '@core/site-header/cart.service';
import { IProductsService, IProductsServiceToken } from '@shared/product-service.interface';
import { Observable } from 'rxjs';
import { EngineersService } from '../engineer.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './squad-catalog.component.html',
  styleUrls: ['./squad-catalog.component.css'],
  providers: [   {
    provide: IProductsServiceToken,
    useFactory: EngineersService,
  }],
})
export class SquadCatalogComponent {
  squad: Observable<Product[]> = this.engineersService.getProducts();

  constructor(@SkipSelf() private cartService: CartService, @Inject(IProductsServiceToken) private engineersService: IProductsService) { } // keep in mind interfaces cannot be used as provider tokens

  addToCart(engineer: Product) {
    this.cartService.add(engineer);
  }
}
