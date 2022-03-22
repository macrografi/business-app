import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { GetHeaderTopInfo } from '../action/header-top-info.action';

@Injectable({
  providedIn: 'root',
})
export class HeaderTopInfoService {
  constructor(private http: HttpClient) {}

  private headerTopInfoUrl = `${environment.headerTopInfoMessage}`;

  getHeaderTopMenu(): Observable<GetHeaderTopInfo[]> {
    return this.http.get<GetHeaderTopInfo[]>(this.headerTopInfoUrl);
  }
}
