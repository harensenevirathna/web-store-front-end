import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductPriceComponent} from './product-price/product-price.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: 'product-price',
    component: ProductPriceComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebstoreRoutingModule {
}
