import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [CommonModule, CartRoutingModule, SharedModule],
  declarations: [CartComponent],
})
export class CartModule {}
