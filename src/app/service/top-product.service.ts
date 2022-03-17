import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TopProduct } from '../model/top-product';

@Injectable({
  providedIn: 'root',
})
export class TopProductService {
  constructor(private http: HttpClient) {}

  private topProductSell = `${environment.topSelling}`;
  private topProductTrend = `${environment.trendingProducts}`;
  private topProductRecent = `${environment.recentAdded}`;
  private topProductRate = `${environment.topRatedProduct}`;

  getTopProductSell(): Observable<TopProduct[]> {
    return this.http.get<TopProduct[]>(this.topProductSell);
  }

  getTopProductTrend(): Observable<TopProduct[]> {
    return this.http.get<TopProduct[]>(this.topProductTrend);
  }

  getTopProductRecent(): Observable<TopProduct[]> {
    return this.http.get<TopProduct[]>(this.topProductRecent);
  }

  getTopProductRate(): Observable<TopProduct[]> {
    return this.http.get<TopProduct[]>(this.topProductRate);
  }
}
