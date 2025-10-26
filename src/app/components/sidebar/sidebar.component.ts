import { Component } from '@angular/core';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
})
export class SidebarComponent {}
