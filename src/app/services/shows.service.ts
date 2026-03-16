import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private baseUrl = 'https://api.tvmaze.com/shows/431';

  constructor(private http: HttpClient) {}

  getShowDetail(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getEpisodes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/episodes`);
  }

  getCast(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/cast`);
  }
}