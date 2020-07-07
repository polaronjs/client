import { Routes } from '@angular/router';

// pages
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
