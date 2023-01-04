import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { DealsDay } from '../model/deals-day';

@Injectable({
  providedIn: 'root',
})
export class DealsDayService {
  constructor(private http: HttpClient) {}

  private dealsOfTheDayDayUrl = `${environment.dealsOfTheDay}`;

  getDealsDay(): Observable<DealsDay[]> {
    return this.http.get<DealsDay[]>(this.dealsOfTheDayDayUrl);
  }
}
