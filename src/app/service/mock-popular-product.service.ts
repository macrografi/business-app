import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PopularProduct } from '../model/popular-product';

@Injectable({
  providedIn: 'root',
})
export class MockPopularProductService {
  constructor(private http: HttpClient) {}

  private popularProductUrl = `${environment.popularProduct}`;

  getPopularProducts(): Observable<PopularProduct[]> {
    return this.http.get<PopularProduct[]>(this.popularProductUrl);
  }
}
