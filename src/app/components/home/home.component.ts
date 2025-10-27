import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, RouterOutlet, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isSidebarOpen = false;

  toggleSidebar = () => {
    this.isSidebarOpen = !this.isSidebarOpen;
  };
}
