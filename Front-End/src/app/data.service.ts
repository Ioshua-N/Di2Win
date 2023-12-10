import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getUserCount(): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}userCount`);
  }

  getPagesCount(): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}pagesCount`);
  }

  getDocCount(): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}docCount`);
  }

  getSeasonality(): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}seasonality`);
  }

  getSegments(): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}segments`);
  }

  getTypeSeg(): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}typeSeg`);
  }

  getDocDis(): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}docDis`);
  }

  getDocPerSeg(): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}docPerSeg`);
  }

  getPgPerDoc(): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}PgPerDoc`);
  }
}