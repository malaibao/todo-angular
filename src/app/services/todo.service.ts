import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosURL: string = `https://jsonplaceholder.typicode.com/todos`;
  limit: string = `?_limit=8`;
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.limit}`);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
