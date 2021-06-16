import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Input() todoInput: Todo;
  @Output() onSave = new EventEmitter<Todo>();
  @Output() onDelete = new EventEmitter<Todo>();
  todoForm = new FormGroup({
    id: new FormControl(0),
    isDone: new FormControl(false),
    text: new FormControl('')
  });
  private isNew: Boolean;

  constructor(private service: TodoService) {
  }

  ngOnInit(): void {
    if (this.todoInput == null) {
      this.todoInput = new Todo();
      this.isNew = true;
    }
    this.todoForm.patchValue(this.todoInput);
  }

  saveTodo(event: any): void {
    this.todoInput = this.todoForm.value;
    if (this.isNew) {
      if(this.todoInput.text != ''){
        this.service.sendTodo(this.todoInput).subscribe(data => {
          this.onSave.emit(data);
          this.todoForm.reset(new Todo());
        });
      }
    } else {
      this.service.editTodo(this.todoInput).subscribe(data => {});
    }
  }

  deleteTodo(event: any): void {
    this.service.deleteTodo(this.todoForm.value.id).subscribe(data => {
      this.onDelete.emit(this.todoForm.value);
    });
    
  }
}
