import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Array<Todo>;
  private todoService: TodoService;

  constructor(service: TodoService) { 
    this.todoService = service;
  }

  ngOnInit(): void {
    this.todoService.getList().subscribe(data => this.todos = data);
  }

}
