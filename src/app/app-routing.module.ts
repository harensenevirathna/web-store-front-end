import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'webstore',
    loadChildren: () => import('./webstore/webstore.module').then(mod => mod.WebstoreModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'webstore/shopping-cart',
  },
  {
    path: '**',
    redirectTo: 'webstore/shopping-cart'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
