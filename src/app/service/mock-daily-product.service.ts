import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { DailyProduct } from '../model/daily-product';

@Injectable({
  providedIn: 'root',
})
export class MockDailyProductService {
  constructor(private http: HttpClient) {}

  private dailyFeaturedProduct = `${environment.dailyFeaturedProduct}`;
  private dailyPopularProduct = `${environment.dailyPopularProduct}`;
  private dailyNewAddedProduct = `${environment.dailyNewAddedProduct}`;

  getDailyProductsFeatured(): Observable<DailyProduct[]> {
    return this.http.get<DailyProduct[]>(this.dailyFeaturedProduct);
  }

  getDailyProductsPopular(): Observable<DailyProduct[]> {
    return this.http.get<DailyProduct[]>(this.dailyPopularProduct);
  }

  getDailyProductsAdded(): Observable<DailyProduct[]> {
    return this.http.get<DailyProduct[]>(this.dailyNewAddedProduct);
  }
}
