import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CarouselDefault } from '../default/carousel.default';
import { GetCarousel } from '../action/carousel.action';
import { tap } from 'rxjs/operators';
import { MockCarouselService } from '../service/mock-carousel.service';
import { Injectable } from '@angular/core';

@State<CarouselDefault>({
  name: 'carousels',
  defaults: {
    carousels: [],
  },
})
@Injectable()
export class HomeState {
  constructor(private carouselService: MockCarouselService) {}

  @Selector() static getBannerList(state: CarouselDefault) {
    return state.carousels;
  }

  @Action(GetCarousel)
  getCarousels({ getState, setState }: StateContext<CarouselDefault>) {
    return this.carouselService.getBanners().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          carousels: results,
        });
      }),
    );
  }
}
