import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from '../shared/hero/hero.component';
import { FeaturedComponent } from '../shared/featured/featured.component';
import { CampaignComponent } from '../shared/campaign/campaign.component';
import { PopularProductComponent } from '../shared/popular-product/popular-product.component';
import { BestSellComponent } from '../shared/best-sell/best-sell.component';
import { DealsDayComponent } from '../shared/deals-day/deals-day.component';
import { TopSellComponent } from '../shared/top-sell/top-sell.component';
import { MockCarouselService } from '../service/mock-carousel.service';
import { MockFeaturesCarouselService } from '../service/mock-features-carousel.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SwiperModule,
    RouterModule.forRoot([{ path: 'home', component: HomeComponent }]),
  ],
  providers: [MockCarouselService, MockFeaturesCarouselService],
  declarations: [
    HomeComponent,
    HeroComponent,
    FeaturedComponent,
    CampaignComponent,
    PopularProductComponent,
    BestSellComponent,
    DealsDayComponent,
    TopSellComponent,
  ],
})
export class HomeModule {}
