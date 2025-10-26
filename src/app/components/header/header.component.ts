import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FooterComponent, RouterOutlet, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
