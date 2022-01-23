import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { HomeState } from '../../state/home.state';
import { GetCarousel } from '../../action/carousel.action';
import { Observable } from 'rxjs';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}
  @Select(HomeState.getBannerList) carousels$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new GetCarousel());
  }
  ngOnDestroy(): void {}
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
