import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId): Observable<Object> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  getPosts(): Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
