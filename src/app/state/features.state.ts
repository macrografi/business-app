import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FeaturesCarouselDefault } from '../default/features-carousel.default';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MockFeaturesCarouselService } from '../service/mock-features-carousel.service';
import { getFeatureCarousels } from '../action/features-carousel.action';

@State<FeaturesCarouselDefault>({
  name: 'featuresCarousel',
  defaults: {
    featuresCarousel: [],
  },
})
@Injectable()
export class FeaturesState {
  constructor(private mockFeaturesCarouselService: MockFeaturesCarouselService) {}

  @Selector() static getFeatureList(state: FeaturesCarouselDefault) {
    return state.featuresCarousel;
  }

  @Action(getFeatureCarousels)
  getFeatureCarousels({ getState, setState }: StateContext<FeaturesCarouselDefault>) {
    return this.mockFeaturesCarouselService.getBanners().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          featuresCarousel: results,
        });
      }),
    );
  }
}
