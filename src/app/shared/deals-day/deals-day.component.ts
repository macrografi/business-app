import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DealsDayState } from '../../state/deals-day.state';
import { getDealsDayAction } from '../../action/deals-day.action';

@Component({
  selector: 'app-deals-day',
  templateUrl: './deals-day.component.html',
  styleUrls: ['./deals-day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealsDayComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  @Select(DealsDayState.getDealsList) dealsDay$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new getDealsDayAction());
  }
  ngOnDestroy(): void {}
}
