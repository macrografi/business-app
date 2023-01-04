import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { DealsDayDefault } from '../default/deals-day.default';
import { getDealsDayAction } from '../action/deals-day.action';
import { tap } from 'rxjs/operators';
import { DealsDayService } from '../service/deals-day.service';

@State<DealsDayDefault>({
  name: 'dealsDay',
  defaults: {
    dealsDays: [],
  },
})
@Injectable()
export class DealsDayState {
  constructor(private mockDealsDayService: DealsDayService) {}

  @Selector() static getDealsList(state: DealsDayDefault) {
    return state.dealsDays;
  }

  @Action(getDealsDayAction)
  getDealsOfTheDay({ getState, setState }: StateContext<DealsDayDefault>) {
    return this.mockDealsDayService.getDealsDay().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          dealsDays: results,
        });
      }),
    );
  }
}
