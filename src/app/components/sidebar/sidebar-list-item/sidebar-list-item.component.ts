import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../services/todo.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-list-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-list-item.component.html',
  styleUrl: './sidebar-list-item.component.scss',
  standalone: true,
})
export class SidebarListItemComponent implements OnInit {
  @Input() data!: Todo;
  ngOnInit() {
    console.log('SidebarListItem rendered:');
  }
}
