import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import data from '../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public getList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(data.todosUrl);
  }

  public sendTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(data.todosUrl, todo);
  }

  public editTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(data.todosUrl, todo);
  }

  public deleteTodo(todoId: number): Observable<Object> {
    return this.http.delete(data.todosUrl+'?todoId='+todoId);
  }
}
