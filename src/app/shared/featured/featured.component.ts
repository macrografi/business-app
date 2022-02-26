import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../state/feature.state';
import { getFeatureCarousels } from '../../action/features-carousel.action';
import { Observable } from 'rxjs';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedComponent implements OnInit, OnDestroy {
  swiperConfig: any = {
    slidesPerView: '8',
    spaceBetween: 50,
    breakpoints: {
      1024: {
        spaceBetween: 20,
        slidesPerView: '8',
      },
      992: {
        spaceBetween: 20,
        slidesPerView: '6',
      },
      640: {
        spaceBetween: 20,
        slidesPerView: '3',
      },
      320: {
        spaceBetween: 20,
        slidesPerView: '1',
      },
    },
  };

  constructor(private store: Store) {}
  @Select(FeatureState.getFeatureList) features$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new getFeatureCarousels());
  }
  ngOnDestroy(): void {}
}
