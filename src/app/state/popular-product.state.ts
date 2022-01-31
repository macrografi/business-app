import { Action, Selector, State, StateContext } from '@ngxs/store';
import { PopularProductDefault } from '../default/popular-product.default';
import { GetPopularProduct } from '../action/popular-product.action';
import { tap } from 'rxjs/operators';
import { MockPopularProductService } from '../service/mock-popular-product.service';
import { Injectable } from '@angular/core';

@State<PopularProductDefault>({
  name: 'popularProducts',
  defaults: {
    popularProducts: [],
  },
})
@Injectable()
export class PopularProductState {
  constructor(private mockPopularProductService: MockPopularProductService) {}

  @Selector() static getProductList(state: PopularProductDefault) {
    return state.popularProducts;
  }

  @Action(GetPopularProduct)
  getProducts({ getState, setState }: StateContext<PopularProductDefault>) {
    return this.mockPopularProductService.getPopularProducts().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          popularProducts: results,
        });
      }),
    );
  }
}
