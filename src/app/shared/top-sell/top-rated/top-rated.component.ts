import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TopProductState } from '../../../state/top-product.state';
import { Observable } from 'rxjs';
import { GetTopRated } from '../../../action/top-product.action';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(TopProductState.getTopProductRateList) rates$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new GetTopRated());
  }
}
