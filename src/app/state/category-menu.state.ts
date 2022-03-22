import { Injectable } from '@angular/core';
import { CategoryMenuService } from '../service/category-menu.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CategoryMenuDefault } from '../default/category-menu.default';
import { tap } from 'rxjs/operators';
import { GetCategoryMenu } from '../action/category-menu.action';

@State<CategoryMenuDefault>({
  name: 'category',
  defaults: {
    categoryMenu: [],
  },
})
@Injectable()
export class CategoryMenuState {
  constructor(private categoryMenuService: CategoryMenuService) {}

  @Selector() static getCategoryMenuList(state: CategoryMenuDefault) {
    return state.categoryMenu;
  }

  @Action(GetCategoryMenu)
  getCategoryMenu({ getState, setState }: StateContext<CategoryMenuDefault>) {
    return this.categoryMenuService.getCategoryMenu().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          categoryMenu: results,
        });
      }),
    );
  }
}
