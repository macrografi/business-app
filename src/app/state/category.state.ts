import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CategoryDefault } from '../default/category.default';
import { CategoryService } from '../service/category.service';
import { GetCategory } from '../action/category.action';
import { tap } from 'rxjs/operators';

@State<CategoryDefault>({
  name: 'category',
  defaults: {
    category: [],
  },
})
@Injectable()
export class CategoryState {
  constructor(private categoryService: CategoryService) {}

  @Selector()
  static getCategoryList(state: CategoryDefault) {
    return state.category;
  }

  @Action(GetCategory)
  getCategories({ getState, setState }: StateContext<CategoryDefault>) {
    return this.categoryService.getCategories().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          category: results,
        });
      }),
    );
  }
}
