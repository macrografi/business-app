import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  TopProductRateDefault,
  TopProductRecentDefault,
  TopProductSellDefault,
  TopProductTrendDefault,
} from '../default/top-product.default';
import { TopProductService } from '../service/top-product.service';
import { tap } from 'rxjs/operators';
import { GetRecentlyAdded, GetTopRated, GetTopSelling, GetTrendingProducts } from '../action/top-product.action';

@State<TopProductSellDefault>({
  name: 'topProducts',
  defaults: {
    topProductSell: [],
  },
})
@State<TopProductTrendDefault>({
  name: 'topProducts',
  defaults: {
    topProductTrend: [],
  },
})
@State<TopProductRecentDefault>({
  name: 'topProducts',
  defaults: {
    topProductRecent: [],
  },
})
@State<TopProductRateDefault>({
  name: 'topProducts',
  defaults: {
    topProductRate: [],
  },
})
@Injectable()
export class TopProductState {
  constructor(private topProductService: TopProductService) {}

  @Selector() static getTopProductSellList(state: TopProductSellDefault) {
    return state.topProductSell;
  }
  @Selector() static getTopProductTrendList(state: TopProductTrendDefault) {
    return state.topProductTrend;
  }
  @Selector() static getTopProductRecentList(state: TopProductRecentDefault) {
    return state.topProductRecent;
  }
  @Selector() static getTopProductRateList(state: TopProductRateDefault) {
    return state.topProductRate;
  }

  @Action(GetTopSelling)
  getSellProducts({ getState, setState }: StateContext<TopProductSellDefault>) {
    return this.topProductService.getTopProductSell().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          topProductSell: results,
        });
      }),
    );
  }

  @Action(GetTrendingProducts)
  getTrendProducts({ getState, setState }: StateContext<TopProductTrendDefault>) {
    return this.topProductService.getTopProductTrend().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          topProductTrend: results,
        });
      }),
    );
  }

  @Action(GetRecentlyAdded)
  getRecentProducts({ getState, setState }: StateContext<TopProductRecentDefault>) {
    return this.topProductService.getTopProductRecent().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          topProductRecent: results,
        });
      }),
    );
  }

  @Action(GetTopRated)
  getRateProducts({ getState, setState }: StateContext<TopProductRateDefault>) {
    return this.topProductService.getTopProductRate().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          topProductRate: results,
        });
      }),
    );
  }
}
