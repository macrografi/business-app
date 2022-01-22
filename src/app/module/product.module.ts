import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { ShopProductFilterComponent } from '../shared/shop-product-filter/shop-product-filter.component';
import { ShopProductComponent } from '../shared/shop-product/shop-product.component';
import { ShopPaginationComponent } from '../shared/shop-pagination/shop-pagination.component';
import { SidebarCategoryComponent } from '../shared/sidebar-category/sidebar-category.component';
import { SidebarPriceComponent } from '../shared/sidebar-price/sidebar-price.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'product',
        component: ProductComponent,
      },
    ]),
  ],
  providers: [],
  declarations: [
    ProductComponent,
    BreadcrumbComponent,
    ShopProductFilterComponent,
    ShopProductComponent,
    ShopPaginationComponent,
    SidebarCategoryComponent,
    SidebarPriceComponent,
  ],
})
export class ProductsModule {}
