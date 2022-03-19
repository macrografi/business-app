import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DailyProductState } from '../../state/daily-product.state';
import {
  GetDailyFeaturedProduct,
  GetDailyNewAddedProduct,
  GetDailyPopularProduct,
} from '../../action/daily-product.action';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-best-sell',
  templateUrl: './best-sell.component.html',
  styleUrls: ['./best-sell.component.scss'],
})
export class BestSellComponent implements OnInit, OnDestroy {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  swiperConfig: any = {
    slidesPerView: '10',
    spaceBetween: 50,
    breakpoints: {
      1200: {
        spaceBetween: 20,
        slidesPerView: '5',
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: '4',
      },
      992: {
        spaceBetween: 20,
        slidesPerView: '4',
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

  @Select(DailyProductState.getProductFeaturedList) featured$: Observable<any> | undefined;
  @Select(DailyProductState.getProductPopularList) popular$: Observable<any> | undefined;
  @Select(DailyProductState.getProductNewAddedList) added$: Observable<any> | undefined;

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  ngOnInit(): void {
    this.getFeatured();
    this.getAdded();
    this.getPopular();
  }

  getFeatured() {
    return this.store.dispatch(new GetDailyFeaturedProduct());
  }
  getPopular() {
    return this.store.dispatch(new GetDailyPopularProduct());
  }
  getAdded() {
    return this.store.dispatch(new GetDailyNewAddedProduct());
  }

  ngOnDestroy(): void {}
}
