import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TodoComponent } from './components/todo/todo.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { ForoforComponent } from './components/forofor/forofor.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: ':id', component: TodoComponent },
          { path: '', component: WorkspaceComponent },
        ],
      },
      { path: 'about', component: AboutComponent },
    ],
  },
  {
    path: '**',
    component: ForoforComponent,
  },
];
