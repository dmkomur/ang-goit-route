import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { SidebarListItemComponent } from '../sidebar-list-item/sidebar-list-item.component';
import { Todo } from '../../../services/todo.service';

@Component({
  selector: 'app-sidebar-list',
  imports: [SidebarListItemComponent],
  templateUrl: './sidebar-list.component.html',
  styleUrl: './sidebar-list.component.scss',
  standalone: true,
})
export class SidebarListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todos = this.todoService.getTodoList();
    console.log(this.todos);
  }
}
