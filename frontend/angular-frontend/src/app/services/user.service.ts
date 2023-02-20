import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../constants/types';

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

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.api, user, httpOptions);
  }
}
