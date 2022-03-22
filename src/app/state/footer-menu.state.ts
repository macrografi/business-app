import { FooterMenuService } from '../service/footer-menu.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { FooterMenuDefault } from '../default/footer-menu.default';
import { tap } from 'rxjs/operators';
import { GetFooterMenu } from '../action/footer-menu.action';

@State<FooterMenuDefault>({
  name: 'footer',
  defaults: {
    footerMenu: [],
  },
})
@Injectable()
export class FooterMenuState {
  constructor(private footerMenuService: FooterMenuService) {}

  @Selector() static getFooterMenuList(state: FooterMenuDefault) {
    return state.footerMenu;
  }

  @Action(GetFooterMenu)
  getFooterMenu({ getState, setState }: StateContext<FooterMenuDefault>) {
    return this.footerMenuService.getFooterMenu().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          footerMenu: results,
        });
      }),
    );
  }
}
