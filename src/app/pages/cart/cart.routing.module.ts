import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CartComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CartRoutingModule {}
