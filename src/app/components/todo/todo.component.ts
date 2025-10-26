import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  standalone: true,
})
export class TodoComponent implements OnInit {
  todoId: string | null = null;
  todoData: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.todoId = params.get('id');
      this.todoData = this.todoService.getTodoById(this.todoId);
    });
  }
}
