import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carousel } from '../model/carousel';

@Injectable({
  providedIn: 'root',
})
export class MockCarouselService {
  constructor(private http: HttpClient) {}

  private bannerUrl = `${environment.mockBanner}`;

  getBanners(): Observable<Carousel[]> {
    return this.http.get<Carousel[]>(this.bannerUrl);
  }
}
