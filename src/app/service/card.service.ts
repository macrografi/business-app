import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  private cardUrl = `${environment.addCard}`;

  getCard(): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardUrl);
  }

  deleteCard(id: number) {
    return this.http.delete(this.cardUrl + '/' + id);
  }

  addCard(payload: Card) {
    return this.http.post<Card>(this.cardUrl, payload);
  }

  updateCard(payload: Card, id: number) {
    return this.http.put<Card>(this.cardUrl + '/' + id, payload);
  }
}
