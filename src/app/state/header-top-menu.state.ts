import { Injectable } from '@angular/core';
import { HeaderTopMenuService } from '../service/header-top-menu.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { HeaderTopMenuDefault } from '../default/header-top-menu.default';
import { GetHeaderTopMenu } from '../action/header-top-menu.action';
import { tap } from 'rxjs/operators';

@State<HeaderTopMenuDefault>({
  name: 'headerTopMenu',
  defaults: {
    headerTopMenu: [],
  },
})
@Injectable()
export class HeaderTopMenuState {
  constructor(private headerTopMenuService: HeaderTopMenuService) {}

  @Selector() static getHeaderTopMenuList(state: HeaderTopMenuDefault) {
    return state.headerTopMenu;
  }
  @Action(GetHeaderTopMenu)
  getHeaderTopMenu({ getState, setState }: StateContext<HeaderTopMenuDefault>) {
    return this.headerTopMenuService.getHeaderTopMenu().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          headerTopMenu: results,
        });
      }),
    );
  }
}
