import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  todoControl = new FormControl('');

  constructor(private service: TodoService) {}

  ngOnInit(): void {
  }

  saveTodo(event: any): void {
    let todo = new Todo();
    todo.text = this.todoControl.value;
    this.service.sendTodo(todo).subscribe(data => console.log(data));
  }

}
