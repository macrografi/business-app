import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carousel } from '../model/carousel';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  constructor(private http: HttpClient) {}

  private bannerUrl = `${environment.banner}`;

  getBanners(): Observable<Carousel[]> {
    return this.http.get<Carousel[]>(this.bannerUrl);
  }

}
