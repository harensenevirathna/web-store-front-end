import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebstoreRoutingModule } from './webstore-routing.module';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProductPriceComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    WebstoreRoutingModule,
    FormsModule,
  ]
})
export class WebstoreModule { }
