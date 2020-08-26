import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css'],
})
export class AddTodosComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    const todo = {
      title: this.title,
      completed: false,
    };

    this.addTodo.emit(todo);
  }
}
