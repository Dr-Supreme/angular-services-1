import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';
import { CART_OPTIONS_TOKEN, CartOptions, CartService } from '@core/site-header/cart.service';
import { IProductsService, IProductsServiceToken } from '@shared/product-service.interface';
import { EngineersService } from './engineer.service';

@NgModule({
  declarations: [SquadCatalogComponent],
  imports: [SharedModule, SquadRoutingModule],
  providers: [ 
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: {
        persistanceType: 'local',
        persistanceKey: 'squad-cart',
        multi: false,
      }
    },
    {
      provide: CartService,
      useFactory: (cartOptions: CartOptions) => {return new CartService(cartOptions); },
      deps: [CART_OPTIONS_TOKEN],
      multi: false,
    },
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: {
        persistanceType: 'none',
        persistanceKey: 'squad-cart',
        multi: true,
      }
    }, 
    // CartService,
    {
      provide: CartService,
      useFactory: (cartOptions: CartOptions) => { return new CartService(cartOptions); },
      deps: [CART_OPTIONS_TOKEN],
      multi : true,
    },
    // {
    //   provide: IProductsServiceToken,
    //   useFactory: EngineersService,
    // }
  ],
})
export class SquadModule { }

