import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TopProductState } from '../../../state/top-product.state';
import { Observable } from 'rxjs';
import { GetTopSelling } from '../../../action/top-product.action';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.scss'],
})
export class TopSellingComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(TopProductState.getTopProductSellList) sells$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new GetTopSelling());
  }
}
