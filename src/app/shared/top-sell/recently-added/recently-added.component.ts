import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TopProductState } from '../../../state/top-product.state';
import { GetRecentlyAdded } from '../../../action/top-product.action';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss'],
})
export class RecentlyAddedComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(TopProductState.getTopProductRecentList) recents$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new GetRecentlyAdded());
  }
}
