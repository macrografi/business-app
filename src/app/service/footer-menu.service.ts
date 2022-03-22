import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FooterMenu } from '../model/footer-menu';

@Injectable({
  providedIn: 'root',
})
export class FooterMenuService {
  constructor(private http: HttpClient) {}

  private footerMenuUrl = `${environment.footerBottomMenu}`;

  getFooterMenu(): Observable<FooterMenu[]> {
    return this.http.get<FooterMenu[]>(this.footerMenuUrl);
  }
}
