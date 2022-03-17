import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TopProductState } from '../../../state/top-product.state';
import { Observable } from 'rxjs';
import { GetTrendingProducts } from '../../../action/top-product.action';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.scss'],
})
export class TrendingProductsComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(TopProductState.getTopProductTrendList) trends$: Observable<any> | undefined;

  ngOnInit() {
    this.store.dispatch(new GetTrendingProducts());
  }
}
