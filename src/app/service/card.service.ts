import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}
  private cardUrl = `${environment.card}`;

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardUrl);
  }

  addCard(payload: Card) {
    return this.http.post<Card>(this.cardUrl, payload);
  }

  deleteCard(id: number) {
    return this.http.delete(this.cardUrl + '/' + id);
  }
}
