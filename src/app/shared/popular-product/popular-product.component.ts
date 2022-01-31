import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PopularProductState } from '../../state/popular-product.state';
import { GetPopularProduct } from '../../action/popular-product.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularProductComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}
  @Select(PopularProductState.getProductList) products$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new GetPopularProduct());
  }
  ngOnDestroy(): void {}
}
