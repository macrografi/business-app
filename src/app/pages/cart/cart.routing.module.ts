import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CartRoutingModule {}
