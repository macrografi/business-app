import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { InfoMessage } from '../model/info-message';

@Injectable({
  providedIn: 'root',
})
export class InfoMessageService {
  constructor(private http: HttpClient) {}
  private messageUrl = `${environment.infoMessage}`;

  getMessages(): Observable<InfoMessage[]> {
    return this.http.get<InfoMessage[]>(this.messageUrl);
  }
}
