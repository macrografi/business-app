import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Wish } from '../model/wish';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}
  private wishUrl = `${environment.wish}`;

  getWishes(): Observable<Wish[]> {
    return this.http.get<Wish[]>(this.wishUrl);
  }

  addWish(payload: Wish) {
    return this.http.post<Wish>(this.wishUrl, payload);
  }

  deleteWish(id: number) {
    return this.http.delete(this.wishUrl + '/' + id);
  }
}
