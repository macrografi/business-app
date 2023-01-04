import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FeatureCarouselDefault } from '../default/features-carousel.default';
import { getFeatureCarousels } from '../action/features-carousel.action';
import { tap } from 'rxjs/operators';
import { FeaturesCarouselService } from '../service/features-carousel.service';
import { Injectable } from '@angular/core';

@State<FeatureCarouselDefault>({
  name: 'featuresCarousel',
  defaults: {
    featureCarousels: [],
  },
})
@Injectable()
export class FeatureState {
  constructor(private mockFeaturesCarouselService: FeaturesCarouselService) {}

  @Selector() static getFeatureList(state: FeatureCarouselDefault) {
    return state.featureCarousels;
  }

  @Action(getFeatureCarousels)
  getFeatureCarousels({ getState, setState }: StateContext<FeatureCarouselDefault>) {
    return this.mockFeaturesCarouselService.getFeatureBanners().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          featureCarousels: results,
        });
      }),
    );
  }
}
