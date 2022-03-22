import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { HomeState } from './state/home.state';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AboutModule, ContactModule, HomeModule, ProductsModule } from './module';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockData } from './mock/mock-data';
import { FeatureState } from './state/feature.state';
import { PopularProductState } from './state/popular-product.state';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { HeaderBottomComponent } from './shared/header/header-nav/header-bottom.component';
import { DealsDayState } from './state/deals-day.state';
import { TopProductState } from './state/top-product.state';
import { DailyProductState } from './state/daily-product.state';
import { CategoryMenuState } from './state/category-menu.state';
import { FooterBannerComponent } from './shared/footer/footer-banner/footer-banner.component';
import { FooterMenuComponent } from './shared/footer/footer-menu/footer-menu.component';
import { FooterFeaturedComponent } from './shared/footer/footer-featured/footer-featured.component';
import { FooterBottomComponent } from './shared/footer/footer-bottom/footer-bottom.component';
import { FooterMenuState } from './state/footer-menu.state';
import { HeaderTopComponent } from './shared/header/header-top/header-top.component';
import { HeaderMiddleComponent } from './shared/header/header-middle/header-middle.component';
import { HeaderTopMenuState } from './state/header-top-menu.state';
import { HeaderTopInfoState } from './state/header-top-info.state';
import {SwiperModule} from "swiper/angular";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderBottomComponent,
    FooterComponent,
    FooterBannerComponent,
    FooterMenuComponent,
    FooterFeaturedComponent,
    FooterBottomComponent,
    HeaderTopComponent,
    HeaderMiddleComponent,
  ],
  imports: [
    NgxsModule.forRoot([
      HomeState,
      FeatureState,
      PopularProductState,
      DealsDayState,
      TopProductState,
      DailyProductState,
      CategoryMenuState,
      FooterMenuState,
      HeaderTopMenuState,
      HeaderTopInfoState,
    ]),
    NgxsDispatchPluginModule.forRoot(),
    HomeModule,
    AboutModule,
    ProductsModule,
    ContactModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'},
    ]),
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockData),
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
