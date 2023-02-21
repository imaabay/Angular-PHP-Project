import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Calculation } from '../constants/types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = 'http://localhost/backend/script.php';

  constructor(private http: HttpClient) {}

  fetchCalculation(cal: Calculation): Observable<string> {
    return this.http.post<string>(this.api, cal, httpOptions);
  }
}
