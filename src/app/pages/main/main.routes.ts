import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

// pages
import { ArticlesComponent } from './pages/articles/articles.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UsersComponent } from './pages/users/users.component';
import { FilesComponent } from './pages/files/files.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MetricsComponent } from './pages/metrics/metrics.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'articles', component: ArticlesComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'files', component: FilesComponent },
      { path: 'metrics', component: MetricsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', redirectTo: 'articles', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
