import { HeaderTopInfoService } from '../service/header-top-info.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HeaderTopInfoDefault } from '../default/header-top-info.default';
import { GetHeaderTopInfo } from '../action/header-top-info.action';
import { tap } from 'rxjs/operators';

@State<HeaderTopInfoDefault>({
  name: 'headerTopInfo',
  defaults: {
    headerTopInfo: [],
  },
})
@Injectable()
export class HeaderTopInfoState {
  constructor(private headerTopInfoService: HeaderTopInfoService) {}

  @Selector() static getHeaderTopInfoList(state: HeaderTopInfoDefault) {
    return state.headerTopInfo;
  }
  @Action(GetHeaderTopInfo)
  getHeaderTopInfo({ getState, setState }: StateContext<HeaderTopInfoDefault>) {
    return this.headerTopInfoService.getHeaderTopMenu().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          headerTopInfo: results,
        });
      }),
    );
  }
}
