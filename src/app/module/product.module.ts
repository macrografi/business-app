import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { ShopProductFilterComponent } from '../shared/shop-product-filter/shop-product-filter.component';
import { ShopProductComponent } from '../shared/shop-product/shop-product.component';
import { ShopPaginationComponent } from '../shared/shop-pagination/shop-pagination.component';
import { SidebarCategoryComponent } from '../shared/sidebar-category/sidebar-category.component';
import { SidebarPriceComponent } from '../shared/sidebar-price/sidebar-price.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProductListComponent } from '../product/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'products/:id',
        component: ProductListComponent,
      },
    ]),
    TabsModule.forRoot(),
  ],
  providers: [],
  declarations: [
    ProductListComponent,
    BreadcrumbComponent,
    ShopProductFilterComponent,
    ShopProductComponent,
    ShopPaginationComponent,
    SidebarCategoryComponent,
    SidebarPriceComponent,
  ],
})
export class ProductsModule {}
