import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { HeaderTopMenuState } from '../../../state/header-top-menu.state';
import { GetHeaderTopMenu } from '../../../action/header-top-menu.action';
import { HeaderTopInfoState } from '../../../state/header-top-info.state';
import { GetHeaderTopInfo } from '../../../action/header-top-info.action';

import SwiperCore, { A11y, Autoplay } from 'swiper';
SwiperCore.use([A11y, Autoplay]);

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss'],
})
export class HeaderTopComponent implements OnInit {
  swiperConfig: any = {
    slidesPerView: '1',
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };
  constructor(private store: Store) {}

  @Select(HeaderTopMenuState.getHeaderTopMenuList) menuItems$: Observable<any> | undefined;
  @Select(HeaderTopInfoState.getHeaderTopInfoList) infoItems$: Observable<any> | undefined;

  ngOnInit() {
    this.getMenuItems();
    this.getInfoItems();
  }
  getMenuItems() {
    return this.store.dispatch(new GetHeaderTopMenu());
  }
  getInfoItems() {
    return this.store.dispatch(new GetHeaderTopInfo());
  }
}
