import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from '../category/category.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forRoot([{ path: 'category', component: CategoryComponent }])],
  declarations: [CategoryComponent],
})
export class CategoryModule {}
