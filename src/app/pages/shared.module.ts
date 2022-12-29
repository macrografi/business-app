import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from '../shared/header/header.component';
import { HeaderBottomComponent } from '../shared/header/header-nav/header-bottom.component';
import { HeaderTopComponent } from '../shared/header/header-top/header-top.component';
import { HeaderMiddleComponent } from '../shared/header/header-middle/header-middle.component';
import { FooterBannerComponent } from '../shared/footer/footer-banner/footer-banner.component';
import { FooterMenuComponent } from '../shared/footer/footer-menu/footer-menu.component';
import { FooterFeaturedComponent } from '../shared/footer/footer-featured/footer-featured.component';
import { FooterBottomComponent } from '../shared/footer/footer-bottom/footer-bottom.component';
import { FooterComponent } from '../shared/footer/footer.component';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import {SwiperModule} from "swiper/angular";
import {TabsModule} from "ngx-bootstrap/tabs";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBottomComponent,
    HeaderTopComponent,
    HeaderMiddleComponent,
    FooterComponent,
    FooterBannerComponent,
    FooterMenuComponent,
    FooterFeaturedComponent,
    FooterBottomComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    HeaderBottomComponent,
    HeaderTopComponent,
    HeaderMiddleComponent,
    FooterComponent,
    FooterBannerComponent,
    FooterMenuComponent,
    FooterFeaturedComponent,
    FooterBottomComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SwiperModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    PerfectScrollbarModule,
    TabsModule.forRoot(),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class SharedModule {}
