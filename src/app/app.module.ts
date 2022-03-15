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
@NgModule({
  declarations: [AppComponent, HeaderComponent, HeaderBottomComponent, FooterComponent],
  imports: [
    NgxsModule.forRoot([HomeState, FeatureState, PopularProductState, DealsDayState]),
    NgxsDispatchPluginModule.forRoot(),
    HomeModule,
    AboutModule,
    ProductsModule,
    ContactModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockData),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
