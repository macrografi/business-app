import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Features } from '../model/features';

@Injectable({
  providedIn: 'root',
})
export class FeaturesCarouselService {
  constructor(private http: HttpClient) {}

  private featuresBannerUrl = `${environment.featuresBanner}`;

  getFeatureBanners(): Observable<Features[]> {
    return this.http.get<Features[]>(this.featuresBannerUrl);
  }
}
