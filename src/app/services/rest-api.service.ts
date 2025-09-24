import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private apiURL = 'http://localhost:7279/api/TodoItems';

  constructor(private http: HttpClient) {}

  getTodoItems(): Observable<any> {
    return this.http.get(this.apiURL, {headers: httpOptions.headers});
  }

  getTodoItem(id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`, {headers: httpOptions.headers});
  }

  putTodoItem(id: string, todoItem: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, todoItem, {headers: httpOptions.headers});
  }

  postTodoItem(todoItem: any): Observable<any> {
    return this.http.post(this.apiURL, todoItem, {headers: httpOptions.headers});
  }

  deleteTodoItem(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`, {headers: httpOptions.headers});
  }
}