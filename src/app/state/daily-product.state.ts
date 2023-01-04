import { Injectable } from '@angular/core';
import { DailyProductService } from '../service/daily-product.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { PopularProductMilkDefault } from '../default/popular-product.default';
import {
  DailyProductFeaturedDefault,
  DailyProductNewAddedDefault,
  DailyProductPopularDefault,
} from '../default/daily-product.default';
import { GetPopularProductMilk } from '../action/popular-product.action';
import { tap } from 'rxjs/operators';
import {
  GetDailyFeaturedProduct,
  GetDailyNewAddedProduct,
  GetDailyPopularProduct,
} from '../action/daily-product.action';

@State<DailyProductFeaturedDefault>({
  name: 'dailyProducts',
  defaults: {
    dailyProductFeatured: [],
  },
})
@State<DailyProductPopularDefault>({
  name: 'dailyProducts',
  defaults: {
    dailyProductPopular: [],
  },
})
@State<DailyProductNewAddedDefault>({
  name: 'dailyProducts',
  defaults: {
    dailyProductNewAdded: [],
  },
})
@Injectable()
export class DailyProductState {
  constructor(private mockDailyProductService: DailyProductService) {}

  @Selector() static getProductFeaturedList(state: DailyProductFeaturedDefault) {
    return state.dailyProductFeatured;
  }

  @Selector() static getProductPopularList(state: DailyProductPopularDefault) {
    return state.dailyProductPopular;
  }

  @Selector() static getProductNewAddedList(state: DailyProductNewAddedDefault) {
    return state.dailyProductNewAdded;
  }

  @Action(GetDailyFeaturedProduct)
  getProductsFeatured({ getState, setState }: StateContext<DailyProductFeaturedDefault>) {
    return this.mockDailyProductService.getDailyProductsFeatured().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          dailyProductFeatured: results,
        });
      }),
    );
  }

  @Action(GetDailyPopularProduct)
  getProductsPopular({ getState, setState }: StateContext<DailyProductPopularDefault>) {
    return this.mockDailyProductService.getDailyProductsPopular().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          dailyProductPopular: results,
        });
      }),
    );
  }

  @Action(GetDailyNewAddedProduct)
  getProductsAdded({ getState, setState }: StateContext<DailyProductNewAddedDefault>) {
    return this.mockDailyProductService.getDailyProductsAdded().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          dailyProductNewAdded: results,
        });
      }),
    );
  }
}
