import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { HomeState } from './state/home.state';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockData } from './mock/mock-data';
import { FeatureState } from './state/feature.state';
import { PopularProductState } from './state/popular-product.state';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { DealsDayState } from './state/deals-day.state';
import { TopProductState } from './state/top-product.state';
import { DailyProductState } from './state/daily-product.state';
import { CategoryMenuState } from './state/category-menu.state';
import { FooterMenuState } from './state/footer-menu.state';
import { HeaderTopMenuState } from './state/header-top-menu.state';
import { HeaderTopInfoState } from './state/header-top-info.state';
import { CardState } from './state/card.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoMessageState } from './state/info-message.state';
import { AppRoutingModule } from './app-routing.module';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { Error404Component } from './pages/error-pages/error-404/error-404.component';
import { Error403Component } from './pages/error-pages/error-403/error-403.component';
import { SharedModule } from './pages/shared.module';
import { WishState } from './state/wish.state';

@NgModule({
  declarations: [AppComponent, FullLayoutComponent, ContentLayoutComponent, Error404Component, Error403Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
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
      CardState,
      WishState,
      InfoMessageState,
    ]),
    NgxsDispatchPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    InMemoryWebApiModule.forRoot(MockData),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
