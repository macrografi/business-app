import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { WishDefault } from '../default/wish.default';
import { WishService } from '../service/wish.service';
import { tap } from 'rxjs/operators';
import {AddWish, DeleteWish, GetWishes} from '../action/wish.action';
import {WishStateModel} from "../model/wish-state";

@State<WishDefault>({
  name: 'wish',
  defaults: {
    wishes: [],
  },
})
@Injectable()
export class WishState {
  constructor(private wishService: WishService) {}

  @Selector() static getWishList(state: WishDefault) {
    return state.wishes;
  }

  @Action(GetWishes)
  getWishes({ getState, setState }: StateContext<WishDefault>) {
    return this.wishService.getWishes().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          wishes: results,
        });
      }),
    );
  }

  @Action(AddWish)
  addWish({ getState, patchState }: StateContext<WishStateModel>, { payload }: AddWish) {
    return this.wishService.addWish(payload).pipe(
      tap((result) => {
        const state = getState();
        patchState({
          wishes: [...state.wishes, result],
        });
      }),
    );
  }

  @Action(DeleteWish)
  deleteWish({ getState, setState }: StateContext<WishStateModel>, { id }: DeleteWish) {
    return this.wishService.deleteWish(id).pipe(
      tap(() => {
        const state = getState();
        const filteredArray = state.wishes.filter((item: { id: number }) => item.id !== id);
        setState({
          ...state,
          wishes: filteredArray,
        });
      }),
    );
  }
}
