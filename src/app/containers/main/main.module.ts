import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { MainComponent } from './main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

// routes
import { routes } from './main.routes';

// pages
import { ArticlesComponent } from './pages/articles/articles.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UsersComponent } from './pages/users/users.component';
import { FilesComponent } from './pages/files/files.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MetricsComponent } from './pages/metrics/metrics.component';

// modules
import { IncludedModule } from '@included/included.module';

@NgModule({
  declarations: [
    ArticlesComponent,
    CategoriesComponent,
    UsersComponent,
    FilesComponent,
    SettingsComponent,
    MetricsComponent,
    MainComponent,
    SidebarComponent,
    UserMenuComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), IncludedModule],
})
export class MainModule {}
