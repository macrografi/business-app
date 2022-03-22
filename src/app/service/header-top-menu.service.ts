import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HeaderTopMenu } from '../model/header-top-menu';

@Injectable({
  providedIn: 'root',
})
export class HeaderTopMenuService {
  constructor(private http: HttpClient) {}

  private headerTopMenuUrl = `${environment.headerTopSmartMenu}`;

  getHeaderTopMenu(): Observable<HeaderTopMenu[]> {
    return this.http.get<HeaderTopMenu[]>(this.headerTopMenuUrl);
  }
}
