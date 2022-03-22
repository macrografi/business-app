import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Menu } from '../model/menu';

@Injectable({
  providedIn: 'root',
})
export class CategoryMenuService {
  constructor(private http: HttpClient) {}

  private categoryMenuUrl = `${environment.homeHeaderMenu}`;

  getCategoryMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.categoryMenuUrl);
  }
}
