import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private userUrl = `${environment.user}`;

  login(param: any): Observable<any> {
    return this.httpClient.get<any>(this.userUrl);
  }

  logout(param: any): Observable<any> {
    return this.httpClient.get<any>(this.userUrl);
  }
}
