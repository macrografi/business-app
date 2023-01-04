import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PopularProduct } from '../model/popular-product';

@Injectable({
  providedIn: 'root',
})
export class PopularProductService {
  constructor(private http: HttpClient) {}

  private popularProductMilk = `${environment.popularProductMilk}`;
  private popularProductCoffee = `${environment.popularProductCoffee}`;
  private popularProductPet = `${environment.popularProductPet}`;
  private popularProductMeat = `${environment.popularProductMeat}`;
  private popularProductVegetable = `${environment.popularProductVegetable}`;
  private popularProductFruit = `${environment.popularProductFruit}`;

  getPopularProductsMilk(): Observable<PopularProduct[]> {
    return this.http.get<PopularProduct[]>(this.popularProductMilk);
  }

  getPopularProductsCoffee(): Observable<PopularProduct[]> {
    return this.http.get<PopularProduct[]>(this.popularProductCoffee);
  }

  getPopularProductsPet(): Observable<PopularProduct[]> {
    return this.http.get<PopularProduct[]>(this.popularProductPet);
  }

  getPopularProductsMeat(): Observable<PopularProduct[]> {
    return this.http.get<PopularProduct[]>(this.popularProductMeat);
  }

  getPopularProductsVegetable(): Observable<PopularProduct[]> {
    return this.http.get<PopularProduct[]>(this.popularProductVegetable);
  }

  getPopularProductsFruit(): Observable<PopularProduct[]> {
    return this.http.get<PopularProduct[]>(this.popularProductFruit);
  }
}
